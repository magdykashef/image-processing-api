import {
  resize,
} from '../../utils/image.util';

describe('Test image util', () => {
  const width = 500;
  const height = 500;

  it('Should resolve with the correct file name', async (done) => {
    const correctFilename = 'icelandwaterfall';
    const promise = resize(correctFilename, width, height);

    expectAsync(promise).toBeResolved();
    done();
  });

  it('Should reject with Error: Image could not be proccessed', async (done) => {
    const wrongFilename = 'dddsdsdsd';
    const promise = resize(wrongFilename, width, height);

    expectAsync(promise).toBeRejectedWithError('Image could not be proccessed');
    done();
  });
});

