import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction): void => {
  const date = new Date();
  console.log({
    date: date.toLocaleString(),
    method: req.method,
    url: req.url,
    queryParams: req.query,
  });
  next();
};

export default logger;
