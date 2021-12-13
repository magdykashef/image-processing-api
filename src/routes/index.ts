import express from 'express';
import image from './api/image.route';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
  return res.status(200).send('main api endpoint');
});

routes.use('/image', image);

export default routes;
