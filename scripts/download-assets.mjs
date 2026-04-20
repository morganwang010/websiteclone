import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'http://demo.ldcms.com.cn';

const assets = [
  '/assets/addons/ldcms/default/images/logo1.png',
  '/assets/addons/ldcms/ldcms2025/images/menu.svg',
  '/assets/addons/ldcms/ldcms2025/images/close-small.svg',
  '/assets/addons/ldcms/ldcms2025/images/banner1.jpg',
  '/assets/addons/ldcms/ldcms2025/images/banner2.jpg',
  '/assets/addons/ldcms/ldcms2025/images/pro5.jpg',
  '/assets/addons/ldcms/ldcms2025/images/pro2.jpg',
  '/assets/addons/ldcms/ldcms2025/images/pro3.jpg',
  '/assets/addons/ldcms/ldcms2025/images/pro4.jpg',
  '/assets/addons/ldcms/ldcms2025/images/395x400.png',
  '/assets/addons/ldcms/default/images/about.jpeg',
  '/assets/addons/ldcms/ldcms2024/images/idxcase3.jpg',
  '/assets/addons/ldcms/ldcms2024/images/idxcase1.jpg',
  '/assets/addons/ldcms/ldcms2024/images/idxcase2.jpg',
  '/assets/addons/ldcms/default/images/b4.jpeg',
  '/assets/addons/ldcms/default/images/b3.jpeg',
  '/assets/addons/ldcms/default/images/b2.jpeg',
  '/assets/addons/ldcms/default/images/b1.jpeg',
  '/assets/addons/ldcms/default/images/b5.jpeg',
  '/assets/addons/ldcms/ldcms2025/images/240-120.png',
  '/assets/addons/ldcms/ldcms2025/images/logo.png',
  '/assets/addons/ldcms/ldcms2025/images/qrcode.png',
];

const publicDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function downloadAsset(relativePath) {
  const url = baseUrl + relativePath;
  const fileName = path.basename(relativePath);
  const filePath = path.join(publicDir, fileName);
  
  if (fs.existsSync(filePath)) {
    console.log(`Skip: ${fileName} (exists)`);
    return;
  }
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`Error: ${fileName} (${response.status})`);
      return;
    }
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));
    console.log(`Downloaded: ${fileName}`);
  } catch (err) {
    console.log(`Error: ${fileName} - ${err.message}`);
  }
}

async function downloadAll() {
  console.log('Downloading assets from demo.ldcms.com.cn...');
  
  const batchSize = 4;
  for (let i = 0; i < assets.length; i += batchSize) {
    const batch = assets.slice(i, i + batchSize);
    await Promise.all(batch.map(downloadAsset));
  }
  
  console.log('Done!');
}

downloadAll();