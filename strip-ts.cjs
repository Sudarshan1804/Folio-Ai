const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');

function processDirectory(srcPath, destPath) {
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true });
  }

  const entries = fs.readdirSync(srcPath, { withFileTypes: true });

  for (const entry of entries) {
    const srcFile = path.join(srcPath, entry.name);
    
    if (entry.isDirectory()) {
      processDirectory(srcFile, path.join(destPath, entry.name));
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      // It's a file, transform it
      const isTsx = entry.name.endsWith('.tsx');
      const ext = isTsx ? '.jsx' : '.js';
      const destFile = path.join(destPath, entry.name.replace(/\.tsx?$/, ext));

      try {
        const result = babel.transformFileSync(srcFile, {
          presets: [
            ['@babel/preset-typescript', { isTSX: isTsx, allExtensions: true }],
            ['@babel/preset-react', { runtime: 'automatic' }]
          ],
          retainLines: true,
        });

        // Strip out TanStack Router imports and boilerplate (rough heuristic)
        let code = result.code;
        code = code.replace(/import\s+{\s*createFileRoute.*?}\s*from\s*['"]@tanstack\/react-router['"];/gs, '');
        code = code.replace(/export\s+const\s+Route\s*=\s*createFileRoute.*?\({[\s\S]*?component:\s*([A-Za-z0-9_]+),?[\s\S]*?}\);/gs, 'export default $1;');
        
        fs.writeFileSync(destFile, code);
        console.log(`Transformed: ${srcFile} -> ${destFile}`);
      } catch (e) {
        console.error(`Failed to transform ${srcFile}:`, e);
      }
    } else {
      // copy other files as is (like css, etc.)
      const destFile = path.join(destPath, entry.name);
      fs.copyFileSync(srcFile, destFile);
    }
  }
}

// Convert components and routes
processDirectory(path.join(__dirname, 'src/components'), path.join(__dirname, 'frontend/src/components'));
processDirectory(path.join(__dirname, 'src/routes'), path.join(__dirname, 'frontend/src/pages'));
processDirectory(path.join(__dirname, 'src/lib'), path.join(__dirname, 'frontend/src/lib'));

console.log("Done transforming.");
