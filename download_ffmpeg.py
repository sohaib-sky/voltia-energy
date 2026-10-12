import urllib.request
import ssl
import os
import zipfile
import subprocess
import shutil

# Ignore SSL certificate errors
ssl._create_default_https_context = ssl._create_unverified_context

url = "https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip"
zip_path = "ffmpeg.zip"
extract_path = "ffmpeg_extracted"

try:
    print("Downloading ffmpeg...")
    urllib.request.urlretrieve(url, zip_path)
    print("Downloaded successfully.")
    
    print("Extracting...")
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(extract_path)
        
    ffmpeg_exe = None
    for root, dirs, files in os.walk(extract_path):
        if "ffmpeg.exe" in files:
            ffmpeg_exe = os.path.join(root, "ffmpeg.exe")
            break
            
    if ffmpeg_exe:
        print(f"Found ffmpeg at {ffmpeg_exe}")
        
        # Test it
        subprocess.run([ffmpeg_exe, "-version"], check=True)
        
        # Copy to local dir
        shutil.copy(ffmpeg_exe, "ffmpeg.exe")
        print("Copied ffmpeg.exe to project root.")
    else:
        print("Could not find ffmpeg.exe in extracted files.")
        
except Exception as e:
    print(f"Error: {e}")
