const fs = require('fs');
const html = fs.readFileSync('scripts/portfolio_page.html', 'utf8');

// Search around Space Build
const idx = html.indexOf('Space Build');
if (idx !== -1) {
  console.log('--- SPACE BUILD CONTEXT ---');
  console.log(html.slice(idx - 200, idx + 800));
}

// Search around Intirio World
const idx2 = html.indexOf('Intirio World');
if (idx2 !== -1) {
  console.log('--- INTIRIO WORLD CONTEXT ---');
  console.log(html.slice(idx2 - 200, idx2 + 800));
}

