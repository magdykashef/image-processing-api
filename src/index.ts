import express from 'express';
import logger from './middleware/logger';
import routes from './routes';

const app = express();
const port = 3000;

app.use(logger);
app.use('/api', routes);

app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});

export default app;
