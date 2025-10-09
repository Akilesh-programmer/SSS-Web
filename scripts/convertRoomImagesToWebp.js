import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOM_PHOTOS_DIR = path.join(__dirname, '../public/assets/Room_Photos');

async function convertToWebP() {
  try {
    const files = fs.readdirSync(ROOM_PHOTOS_DIR);
    const jpgFiles = files.filter(file => file.toLowerCase().endsWith('.jpg'));

    console.log(`Found ${jpgFiles.length} JPG files to convert...`);

    for (const file of jpgFiles) {
      const inputPath = path.join(ROOM_PHOTOS_DIR, file);
      const outputPath = path.join(
        ROOM_PHOTOS_DIR,
        file.replace(/\.jpe?g$/i, '.webp')
      );

      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);

      console.log(`✓ Converted ${file} to WebP`);

      // Delete the original JPG file
      fs.unlinkSync(inputPath);
      console.log(`✓ Deleted original ${file}`);
    }

    console.log('\n✅ All room photos converted to WebP successfully!');
  } catch (error) {
    console.error('Error converting images:', error);
    process.exit(1);
  }
}

convertToWebP();
