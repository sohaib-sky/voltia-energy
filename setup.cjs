const fs = require('fs');
const path = require('path');

const dirs = [
  'src/components',
  'src/sections',
  'src/styles',
  'src/data',
  'src/hooks',
  'src/animations'
];

dirs.forEach(d => {
  const p = path.join(__dirname, d);
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p, { recursive: true });
    console.log(`Created ${p}`);
  }
});

const files = [
  'src/components/Navigation.jsx',
  'src/sections/Experience3D.jsx',
  'src/sections/Flavors.jsx',
  'src/sections/Ingredients.jsx',
  'src/sections/WhyVoltia.jsx',
  'src/sections/Story.jsx',
  'src/sections/ProductInfo.jsx',
  'src/sections/FAQ.jsx',
  'src/sections/FinalCTA.jsx',
  'src/sections/Footer.jsx',
  'src/styles/components.css'
];

files.forEach(f => {
  const p = path.join(__dirname, f);
  if (!fs.existsSync(p)) {
    fs.writeFileSync(p, `export default function ${path.basename(f, '.jsx')}() { return null; }`);
    console.log(`Created ${p}`);
  }
});
