
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Papa from 'papaparse';
import axios from 'axios';
import { pipeline } from 'stream';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const streamPipeline = promisify(pipeline);

const CSV_FILE = path.join(__dirname, '../athek-deals.csv');
const OUTPUT_JSON = path.join(__dirname, '../src/data/deals.json');
const IMAGES_DIR = path.join(__dirname, '../public/images');

// Make sure directories exist
if (!fs.existsSync(path.dirname(OUTPUT_JSON))) {
    fs.mkdirSync(path.dirname(OUTPUT_JSON), { recursive: true });
}
if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

async function downloadImage(url, filepath) {
    try {
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        });
        await streamPipeline(response.data, fs.createWriteStream(filepath));
        return true;
    } catch (error) {
        console.error(`Failed to download image: ${url}`, error.message);
        return false;
    }
}

async function processData() {
    const fileContent = fs.readFileSync(CSV_FILE, 'utf8');
    const results = Papa.parse(fileContent, {
        header: true,
        skipEmptyLines: true
    });

    const deals = [];

    console.log(`Found ${results.data.length} items.`);

    for (const row of results.data) {
        // Extract slug from offer_url (e.g. https://athek.sa/coupon/pik/13211 -> pik)
        // Fallback to sanitizing title if URL parse fails
        let slug = 'deal-' + Math.random().toString(36).substr(2, 9);
        try {
            const urlParts = row.offer_url.split('/');
            // Expected format: .../coupon/[slug]/[id]
            // Arrays are 0-indexed. 
            // https: / / athek.sa / coupon / pik / 13211
            // 0      1 2         3      4     5
            if (urlParts.length >= 5) {
                slug = urlParts[4];
            }
        } catch (e) {
            console.warn('Could not parse URL for slug:', row.offer_url);
        }

        // Clean slug
        slug = slug.toLowerCase().replace(/[^a-z0-9-]/g, '-');

        // Image handling
        let localImagePath = `/images/${slug}.png`;
        const absoluteImagePath = path.join(IMAGES_DIR, `${slug}.png`);

        // Use dummy image if original is dummy, or download
        if (row.offer_image) {
            if (!fs.existsSync(absoluteImagePath)) {
                console.log(`Downloading image for ${slug}...`);
                await downloadImage(row.offer_image, absoluteImagePath);
            }
        } else {
            localImagePath = '/images/placeholder.png'; // Define a placeholder later
        }

        deals.push({
            slug: slug,
            title: row.offer_title,
            description: row.offer_meta_description || '', // Will generate if empty
            content: row.offer_content || '', // Will generate if empty
            couponCode: row.offer_coupon_code,
            merchantUrl: row.merchant_url,
            originalUrl: row.offer_url,
            image: localImagePath
        });
    }

    fs.writeFileSync(OUTPUT_JSON, JSON.stringify(deals, null, 2));
    console.log(`Saved ${deals.length} deals to ${OUTPUT_JSON}`);
}

processData();
