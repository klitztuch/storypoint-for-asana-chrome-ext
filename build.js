var fs = require('fs');
var path = require('path');

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

// Copy manifest
fs.copyFileSync('app/manifest.json', 'dist/manifest.json');

// Copy scripts
if (!fs.existsSync('dist/scripts')) {
  fs.mkdirSync('dist/scripts', { recursive: true });
}
fs.copyFileSync('app/scripts.babel/background.js', 'dist/background.js');
fs.copyFileSync('app/scripts/contentscript.js', 'dist/scripts/contentscript.js');

// Copy images
if (!fs.existsSync('dist/images')) {
  fs.mkdirSync('dist/images', { recursive: true });
}
fs.copyFileSync('app/images/icon-16.png', 'dist/images/icon-16.png');
fs.copyFileSync('app/images/icon-128.png', 'dist/images/icon-128.png');

// Copy locales
if (!fs.existsSync('dist/_locales')) {
  fs.mkdirSync('dist/_locales', { recursive: true });
}
fs.cpSync('app/_locales', 'dist/_locales', { recursive: true });

console.log('Build completed successfully!'); 