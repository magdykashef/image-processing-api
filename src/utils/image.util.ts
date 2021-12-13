import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const resize = async (
  filename: string,
  width: number,
  height: number
): Promise<Buffer> => {
  // create resized folder if does not exist
  if (!fs.existsSync(path.resolve(`${__dirname}/../assets/images/resized`))) {
    fs.mkdirSync(`${__dirname}/../assets/images/resized`, { recursive: true });
  }
  return await sharp(originalImagePath(filename))
    .resize({ width, height })
    .toBuffer();
};

const originalImagePath = (filename: string): string => {
  return path.resolve(`${__dirname}/../assets/images/full/${filename}.jpg`);
};

const resizedImagePath = (
  filename: string,
  width: number,
  height: number
): string => {
  return path.resolve(
    `${__dirname}/../assets/images/resized/${filename}@${width}x${height}.jpg`
  );
};

export { originalImagePath, resizedImagePath, resize };
