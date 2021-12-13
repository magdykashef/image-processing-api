import express from 'express';
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import { resizedImagePath, resize } from '../utils/image.util';

// /api/image/?filename=palmtunnel&width=500&height=500
const resizeImageController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    if (!req.query.filename) {
      return res.status(400).send({ error: 'file name is missing' });
    }

    if (!req.query.width) {
      return res.status(400).send({ error: 'width value is missing' });
    }
    if (isNaN(parseInt(req.query.width as string))) {
      return res.status(400).send({ error: 'width value is not a number' });
    }
    if (parseInt(req.query.width as string) < 1) {
      return res.status(400).send({
        error: 'must provide positive width value',
      });
    }

    if (!req.query.height) {
      return res.status(400).send({ error: 'height value is missing' });
    }
    if (isNaN(parseInt(req.query.height as string))) {
      return res.status(400).send({ error: 'height value is not a number' });
    }
    if (parseInt(req.query.height as string) < 1) {
      return res.status(400).send({
        error: 'must provide positive height value',
      });
    }

    const filename = req.query.filename as string;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);

    // send resized image if already exists
    if (fs.existsSync(resizedImagePath(filename, width, height))) {
      return res
        .status(200)
        .sendFile(resizedImagePath(filename, width, height));
    }

    // resize and send image
    const resizeResult = await resize(filename, width, height);
    const fileData = await fsPromises.open(
      resizedImagePath(filename, width, height),
      'w'
    );
    await fileData.write(resizeResult);
    await fileData.close().then(() => {
      return res
        .status(200)
        .sendFile(resizedImagePath(filename, width, height));
    });
  } catch (error) {
    return res.status(500).send({ error: `${error}` });
  }
};

export default resizeImageController;
