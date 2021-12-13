import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

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

const resize = async (
  filename: string,
  width: number,
  height: number
): Promise<Buffer> => {
  // create resized folder if does not exist
  if (!fs.existsSync(path.resolve(`${__dirname}/../assets/images/resized`))) {
    fs.mkdirSync(`${__dirname}/../assets/images/resized`, { recursive: true });
  }

  try {
    if (fs.existsSync(originalImagePath(filename))) {
      return await sharp(originalImagePath(filename))
        .resize({ width, height })
        .toBuffer();
    } else {
      throw new Error('Image does not exist');
    }
  } catch (error) {
    throw new Error('Image could not be proccessed');
  }
};

export { originalImagePath, resizedImagePath, resize };
