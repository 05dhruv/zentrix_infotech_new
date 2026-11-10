const fs = require('fs');
const html = fs.readFileSync('scripts/portfolio_page.html', 'utf8');

// Search around Space Build button
const idx = html.indexOf('Space Build');
if (idx !== -1) {
  console.log(html.slice(idx, idx + 1500));
}

