const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeDetailedPortfolio() {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://www.zentrixinfotech.com/portfolio', { waitUntil: 'networkidle2', timeout: 60000 });

  const rawHtml = await page.content();
  fs.writeFileSync('scripts/portfolio_page.html', rawHtml);

  const projects = await page.evaluate(() => {
    // Find all cards in the portfolio grid
    const cards = [];
    
    // Each project card usually has an image, category badge, title, description, and external live URL link
    const headings = document.querySelectorAll('h2, h3, h4');
    headings.forEach(h => {
      // Find closest container that resembles a card
      let container = h.parentElement;
      for (let i = 0; i < 4; i++) {
        if (!container) break;
        if (container.querySelector('img') && container.innerText.length > 50 && container.innerText.length < 800) {
          break;
        }
        container = container.parentElement;
      }

      if (container && !cards.some(c => c.title === h.innerText.trim())) {
        const title = h.innerText.trim();
        const img = container.querySelector('img');
        const imgSrc = img ? (img.currentSrc || img.src) : '';
        
        // Find external link (e.g. visit site icon / button)
        const anchors = Array.from(container.querySelectorAll('a'));
        let liveUrl = '';
        for (const a of anchors) {
          if (a.href && !a.href.includes('zentrixinfotech.com') && !a.href.startsWith('javascript:')) {
            liveUrl = a.href;
            break;
          }
        }

        // Find category badge
        let category = '';
        const badge = container.querySelector('[class*="badge"], [class*="category"], span');
        if (badge && badge.innerText.trim() !== title) {
          category = badge.innerText.trim();
        }

        // Find description
        let description = '';
        const p = container.querySelector('p');
        if (p) {
          description = p.innerText.trim();
        }

        if (title && title !== "Let's Build Your Website" && title !== 'Zentrix Infotech' && !title.includes('Solutions') && !title.includes('Resources') && !title.includes('Company') && !title.includes('Legal') && !title.includes('Follow Us')) {
          cards.push({
            title,
            category,
            description,
            imgSrc,
            liveUrl,
            allText: container.innerText
          });
        }
      }
    });

    return cards;
  });

  console.log('Total extracted portfolio projects:', projects.length);
  fs.writeFileSync('scripts/portfolio_projects.json', JSON.stringify(projects, null, 2));
  console.log(JSON.stringify(projects.map(p => ({ title: p.title, liveUrl: p.liveUrl, img: p.imgSrc.slice(0, 80) })), null, 2));

  await browser.close();
}

scrapeDetailedPortfolio().catch(console.error);

