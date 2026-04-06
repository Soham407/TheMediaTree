import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const urls = [
  'https://pureelements.in',
  'https://ikigaire.ae',
  'https://pulllogic.com',
  'https://manojraneassociates.com',
  'https://cybersec1st.com',
  'https://nikhilgroup.in',
  'https://fountainparkdental.com',
  'https://mihirjoglekar.com',
  'https://gravitasllp.com',
  'https://steelpoint.co.in',
  'https://iil.unipune.ac.in',
  'https://theconstructiongroup.com',
  'https://aandagroup.in',
  'https://espreerealtors.com',
  'https://pacificsmilekrafters.com',
  'https://savemaxsolar.com',
  'https://jds-ecosolutions.com',
  'https://shadaj.org',
  'https://micpune.com',
  'https://chulavistaurgentdental.com',
  'https://gslbiotech.in',
  'https://drparmars.com'
];

const outputDir = path.join(__dirname, '../public/projects');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ 
    headless: 'new',
    ignoreHTTPSErrors: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors'] 
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });

  for (const url of urls) {
    const domain = new URL(url).hostname.replace(/^www\./, '');
    const filename = `${domain}.webp`;
    const filepath = path.join(outputDir, filename);
    
    if (fs.existsSync(filepath)) {
      console.log(`Skipping ${domain}, already exists.`);
      continue;
    }

    console.log(`Capturing ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      // Small wait for animations
      await new Promise(r => setTimeout(r, 4000));
      await page.screenshot({ path: filepath, type: 'webp', quality: 80 });
      console.log(`Saved ${filename}`);
    } catch (err) {
      console.error(`Failed to capture ${url}:`, err.message);
    }
  }

  await browser.close();
  console.log('Finished capturing screenshots.');
})();