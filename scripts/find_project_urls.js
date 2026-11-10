const fs = require('fs');
const html = fs.readFileSync('scripts/portfolio_page.html', 'utf8');

const regex = /href=["'](https?:\/\/[^"']+)["']/gi;
let m;
const extLinks = [];
while ((m = regex.exec(html)) !== null) {
  const url = m[1];
  if (!url.includes('zentrixinfotech.com') && 
      !url.includes('fonts') && 
      !url.includes('schema') && 
      !url.includes('cloudinary') && 
      !url.includes('w3.org') &&
      !url.includes('google') &&
      !url.includes('twitter') &&
      !url.includes('facebook') &&
      !url.includes('instagram') &&
      !url.includes('linkedin') &&
      !url.includes('whatsapp') &&
      !url.includes('flaticon')) {
    extLinks.push(url);
  }
}
console.log('Project URLs found in portfolio_page.html:');
console.log([...new Set(extLinks)]);

