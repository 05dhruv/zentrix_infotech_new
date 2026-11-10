const puppeteer = require('puppeteer');
const sharp = require('sharp');
const fs = require('fs');

async function captureJigyasa() {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--user-data-dir=C:\\Users\\dhruv\\AppData\\Local\\Temp\\pupp_jigyasa_' + Date.now()
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to https://www.jigyasahospital.com/ ...');
  await page.goto('https://www.jigyasahospital.com/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 4000));

  // Dismiss any popup modals or dialogs if present
  await page.evaluate(() => {
    const popups = document.querySelectorAll('[class*="modal"], [class*="popup"], [class*="dialog"], [id*="modal"], [id*="popup"]');
    popups.forEach(p => p.remove());

    const all = Array.from(document.querySelectorAll('*'));
    for (const el of all) {
      const style = window.getComputedStyle(el);
      if (style.position === 'fixed' && parseInt(style.zIndex, 10) > 100 && (el.innerText?.includes('Appointment') || el.innerText?.includes('Enquiry') || el.innerText?.includes('Book'))) {
        el.remove();
      }
    }
  });

  // Smooth progressive scroll down to trigger all lazy loaded images and animations
  console.log('Scrolling through the page to load all assets...');
  const scrollHeight = await page.evaluate(async () => {
    return new Promise(resolve => {
      let currentY = 0;
      const step = 250;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        currentY += step;
        if (currentY >= document.body.scrollHeight || currentY > 15000) {
          clearInterval(timer);
          resolve(document.body.scrollHeight);
        }
      }, 100);
    });
  });
  console.log('Total scroll height:', scrollHeight);

  // Wait 3 seconds at bottom
  await new Promise(r => setTimeout(r, 3000));

  // Scroll back to top
  await page.evaluate(() => {
    window.scrollTo(0, 0);

    // Make header position absolute or static so it doesn't repeat during fullPage capture
    const header = document.querySelector('header, nav, .header, .nav, .navbar, .sticky-top');
    if (header) {
      header.style.position = 'absolute';
    }

    // Force any opacity 0 to 1
    document.querySelectorAll('*').forEach(el => {
      const s = window.getComputedStyle(el);
      if (s.opacity === '0') {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
      }
    });
  });

  await new Promise(r => setTimeout(r, 3000));

  console.log('Taking fullPage screenshot...');
  const rawPng = 'public/images/projects/jigyasa_full_raw.png';
  await page.screenshot({ path: rawPng, fullPage: true });

  const meta = await sharp(rawPng).metadata();
  console.log('Raw screenshot dimensions:', meta.width, 'x', meta.height);

  console.log('Converting to WebP with width 720...');
  await sharp(rawPng)
    .resize({ width: 720 })
    .webp({ quality: 84 })
    .toFile('public/images/projects/jigyasa-hospital-scroll.webp');

  console.log('Successfully updated public/images/projects/jigyasa-hospital-scroll.webp');
  await browser.close();
}

captureJigyasa().catch(err => {
  console.error('Error capturing Jigyasa:', err);
  process.exit(1);
});

