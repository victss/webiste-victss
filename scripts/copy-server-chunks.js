const fs = require('fs');
const path = require('path');

const root = process.cwd();
const chunksDir = path.join(root, '.next', 'server', 'chunks');
const destDir = path.join(root, '.next', 'server');

if (!fs.existsSync(chunksDir)) {
  console.warn('No server chunks directory found:', chunksDir);
  process.exit(0);
}

for (const fileName of fs.readdirSync(chunksDir)) {
  const srcPath = path.join(chunksDir, fileName);
  const destPath = path.join(destDir, fileName);

  if (fs.statSync(srcPath).isFile()) {
    fs.copyFileSync(srcPath, destPath);
  }
}

console.log('Copied server chunks from .next/server/chunks to .next/server');
