import express from 'express';
import resizeImageController from '../../controllers/image.controller';

const image = express.Router();

//   /api/image/?filename=icelandwaterfall&width=500&height=500
image.get('/', resizeImageController);

export default image;
