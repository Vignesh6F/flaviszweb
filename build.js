const fs = require('fs');
const path = require('path');

const SRC = __dirname;
const DIST = path.join(__dirname, 'dist');

// Files and folders to copy
const INCLUDE = ['index.html', 'style.css', 'script.js', 'assets'];

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(child => {
      copyRecursive(path.join(src, child), path.join(dest, child));
    });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`  ✔  ${path.relative(SRC, src)}`);
  }
}

// Clean dist
if (fs.existsSync(DIST)) {
  fs.rmSync(DIST, { recursive: true, force: true });
  console.log('🗑  Cleaned dist/\n');
}
fs.mkdirSync(DIST);

console.log('📦  Building Flaviz Web Company...\n');

INCLUDE.forEach(item => {
  const srcPath = path.join(SRC, item);
  const destPath = path.join(DIST, item);
  if (fs.existsSync(srcPath)) {
    copyRecursive(srcPath, destPath);
  } else {
    console.warn(`  ⚠  Skipped (not found): ${item}`);
  }
});

console.log('\n✅  Build complete → dist/index.html');
console.log(`🌐  Open: file://${DIST}/index.html\n`);
