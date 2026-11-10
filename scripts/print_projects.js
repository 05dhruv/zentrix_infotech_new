const fs = require('fs');
const projects = JSON.parse(fs.readFileSync('scripts/parsed_portfolio_all.json', 'utf8'));

projects.forEach((p, i) => {
  const parts = p.htmlText.split(' | ');
  console.log(`${i+1}. Title: ${p.title}`);
  console.log(`   Category: ${parts[0]}`);
  console.log(`   Image: ${p.imgSrc}`);
  console.log(`   Desc: ${p.desc ? p.desc.slice(0, 100) : ''}...`);
  console.log('----------------------------------------------------');
});

