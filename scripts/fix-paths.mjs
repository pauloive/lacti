import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

function fixHtml(content) {
  // Fix /images/ and /videos/ public asset paths
  // (assetPrefix: './' already handles _next/ paths)
  content = content.replace(/"\/images\//g, '"images/');
  content = content.replace(/'\/images\//g, "'images/");
  content = content.replace(/"\/videos\//g, '"videos/');
  content = content.replace(/content="\/images\//g, 'content="images/');

  // Fix root href links (navbar/footer logo)
  content = content.replace(/href="\/"/g, 'href="./"');

  return content;
}

function processDir(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      processDir(full);
    } else if (extname(name) === '.html') {
      const original = readFileSync(full, 'utf8');
      const fixed = fixHtml(original);
      writeFileSync(full, fixed, 'utf8');
      console.log('Corrigido:', full);
    }
  }
}

processDir('out');
console.log('Paths corrigidos para compatibilidade com file://');
