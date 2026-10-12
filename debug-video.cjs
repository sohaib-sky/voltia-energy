const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  console.log('Navigating to http://localhost:3001...');
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });

  // Evaluate the video element
  const videoData = await page.evaluate(() => {
    const video = document.querySelector('video');
    if (!video) return { exists: false };
    
    return {
      exists: true,
      src: video.currentSrc || video.src || (video.querySelector('source') ? video.querySelector('source').src : 'none'),
      readyState: video.readyState,
      networkState: video.networkState,
      error: video.error ? video.error.message || video.error.code : null,
      paused: video.paused,
      muted: video.muted,
      autoplay: video.autoplay,
      zIndex: window.getComputedStyle(video).zIndex,
      opacity: window.getComputedStyle(video).opacity,
      display: window.getComputedStyle(video).display,
      visibility: window.getComputedStyle(video).visibility,
      width: window.getComputedStyle(video).width,
      height: window.getComputedStyle(video).height,
    };
  });

  console.log('Video Element Data:', videoData);

  // Take a screenshot to see what's rendering
  await page.screenshot({ path: 'debug-hero.png' });

  await browser.close();
})();
