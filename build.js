#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

const astroPath = path.join(__dirname, 'node_modules', '.bin', 'astro');

const child = spawn('node', [astroPath, 'build'], {
  stdio: 'inherit',
  cwd: __dirname
});

child.on('close', (code) => {
  process.exit(code);
});
