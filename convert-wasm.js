import fs from 'fs';
import path from 'path';
import { FFmpeg } from '@ffmpeg/ffmpeg';

async function convertVideo() {
  try {
    console.log('Starting WASM conversion...');
    const ffmpeg = new FFmpeg();
    
    // Load ffmpeg.wasm-core
    await ffmpeg.load();
    
    console.log('Loaded FFmpeg core.');
    
    const inputPath = path.join(process.cwd(), 'public', 'videos', 'hero-product.mp4');
    const outputPath = path.join(process.cwd(), 'public', 'videos', 'hero-product-converted.mp4');
    
    // Read the file
    const inputData = fs.readFileSync(inputPath);
    
    // Write it to FFmpeg's virtual filesystem
    await ffmpeg.writeFile('input.mp4', new Uint8Array(inputData));
    
    console.log('File written to VFS. Starting transcode...');
    
    // Execute FFmpeg command
    await ffmpeg.exec([
      '-i', 'input.mp4', 
      '-c:v', 'libx264',
      '-pix_fmt', 'yuv420p',
      '-movflags', '+faststart',
      '-y',
      'output.mp4'
    ]);
    
    console.log('Transcode finished.');
    
    // Read the output
    const outputData = await ffmpeg.readFile('output.mp4');
    
    // Backup original
    fs.renameSync(inputPath, inputPath + '.backup');
    
    // Write new file
    fs.writeFileSync(inputPath, Buffer.from(outputData));
    
    console.log('Success! Video transcoded to H.264/yuv420p.');
    
  } catch (error) {
    console.error('Error in conversion:', error);
  }
}

convertVideo();
