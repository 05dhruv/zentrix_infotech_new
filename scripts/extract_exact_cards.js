const puppeteer = require('puppeteer');
const fs = require('fs');

async function extractExactCards() {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://www.zentrixinfotech.com/portfolio', { waitUntil: 'networkidle2', timeout: 60000 });

  const cards = await page.evaluate(() => {
    // Look for cards: find all images in the portfolio section
    const result = [];
    const images = Array.from(document.querySelectorAll('img')).filter(img => {
      const src = img.currentSrc || img.src;
      return src.includes('cloudinary') || src.includes('upload') || src.includes('Nest_Hub') || src.includes('min_');
    });

    images.forEach(img => {
      // Find the card container
      let card = img.closest('.group') || img.closest('[class*="card"]') || img.parentElement?.parentElement?.parentElement;
      if (!card) return;

      const titleEl = card.querySelector('h2, h3, h4, h5');
      const title = titleEl ? titleEl.innerText.trim() : '';

      const pEl = card.querySelector('p');
      const desc = pEl ? pEl.innerText.trim() : '';

      // Badges
      const badges = Array.from(card.querySelectorAll('span, button')).map(s => s.innerText.trim()).filter(s => s.length > 2 && s.length < 50 && s !== title);

      // Links inside card
      const links = Array.from(card.querySelectorAll('a')).map(a => a.href).filter(Boolean);

      // Find any buttons or SVG links
      let visitLink = '';
      const allAnchors = card.querySelectorAll('a');
      for (const a of allAnchors) {
        if (a.href && !a.href.includes('zentrixinfotech.com/portfolio') && !a.href.endsWith('#')) {
          visitLink = a.href;
        }
      }

      if (title && !result.some(r => r.title === title)) {
        result.push({
          title,
          category: badges[0] || '',
          desc,
          imgSrc: img.currentSrc || img.src,
          visitLink,
          links,
          htmlText: card.innerText.replace(/\n+/g, ' | ')
        });
      }
    });

    return result;
  });

  console.log('Total extracted portfolio projects:', cards.length);
  console.log(JSON.stringify(cards, null, 2));
  fs.writeFileSync('scripts/parsed_portfolio_all.json', JSON.stringify(cards, null, 2));

  await browser.close();
}

extractExactCards().catch(console.error);

