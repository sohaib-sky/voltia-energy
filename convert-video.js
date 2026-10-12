const ffmpeg = require('ffmpeg-static');
const ffprobe = require('ffprobe-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoPath = path.join(__dirname, 'public', 'videos', 'hero-product.mp4');
const backupPath = path.join(__dirname, 'public', 'videos', 'hero-product.backup.mp4');
const tempPath = path.join(__dirname, 'public', 'videos', 'hero-product.temp.mp4');

// 1. Backup the original file
if (!fs.existsSync(backupPath)) {
  fs.copyFileSync(videoPath, backupPath);
  console.log(`Backed up original to ${backupPath}`);
} else {
  console.log('Backup already exists, using existing backup as source for diagnosis/conversion');
}

// Ensure we use the backup as the source so we don't accidentally re-probe a corrupted half-converted file
const sourcePath = fs.existsSync(backupPath) ? backupPath : videoPath;

console.log('\n--- DIAGNOSIS ---');
try {
  // Probe video stream
  const ffprobeCmd = `"${ffprobe.path}" -v error -select_streams v:0 -show_entries stream=codec_name,width,height,r_frame_rate,duration,pix_fmt -show_entries format=format_name,duration,size -of json "${sourcePath}"`;
  const probeOutput = execSync(ffprobeCmd).toString();
  const probeData = JSON.parse(probeOutput);
  
  const format = probeData.format;
  const vStream = probeData.streams[0];
  
  // Try probing audio stream
  const ffprobeAudioCmd = `"${ffprobe.path}" -v error -select_streams a:0 -show_entries stream=codec_name -of json "${sourcePath}"`;
  let aStream = null;
  try {
    const audioOutput = execSync(ffprobeAudioCmd).toString();
    const audioData = JSON.parse(audioOutput);
    aStream = audioData.streams[0];
  } catch(e) {}
  
  console.log('Container format:', format.format_name);
  console.log('Video codec:', vStream.codec_name);
  console.log('Audio codec:', aStream ? aStream.codec_name : 'None');
  console.log('Width:', vStream.width);
  console.log('Height:', vStream.height);
  console.log('Frame rate:', vStream.r_frame_rate);
  console.log('Duration:', format.duration);
  console.log('Pixel format:', vStream.pix_fmt);
  console.log('Original file size:', format.size);
  
  console.log('\n--- CONVERSION ---');
  // Convert to Chrome-compatible format
  // Container: MP4, Video: H.264 (libx264), Pixel format: yuv420p, Audio: aac (if exists), web optimized (-movflags faststart)
  
  const ffmpegCmd = `"${ffmpeg}" -y -i "${sourcePath}" -c:v libx264 -pix_fmt yuv420p -profile:v high -level 4.0 -preset slow -crf 22 ${aStream ? '-c:a aac -b:a 128k' : '-an'} -movflags +faststart "${tempPath}"`;
  
  console.log('Running conversion...');
  execSync(ffmpegCmd, { stdio: 'inherit' });
  
  // Replace original file with converted
  fs.copyFileSync(tempPath, videoPath);
  fs.unlinkSync(tempPath);
  console.log('Conversion successful. Replaced original file.');
  
  // Probe converted file size and codec
  const postProbeCmd = `"${ffprobe.path}" -v error -select_streams v:0 -show_entries stream=codec_name -show_entries format=size -of json "${videoPath}"`;
  const postProbeOutput = execSync(postProbeCmd).toString();
  const postProbeData = JSON.parse(postProbeOutput);
  
  console.log('\n--- POST CONVERSION ---');
  console.log('Converted video codec:', postProbeData.streams[0].codec_name);
  console.log('Converted file size:', postProbeData.format.size);
  
} catch(e) {
  console.error('Error during processing:', e.message);
  if (e.stdout) console.error(e.stdout.toString());
  if (e.stderr) console.error(e.stderr.toString());
}
