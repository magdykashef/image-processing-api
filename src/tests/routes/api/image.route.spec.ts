import supertest from 'supertest';
import app from '../../..';

const request = supertest(app);

// full correct endpoint
// /api/images/?filename=icelandwaterfall&width=500&height=500
describe('Test images endpoint responses', () => {
  describe('Test file name query parameter', () => {
    it('Error message should be file name is missing', async (done) => {
      const response = await request.get('/api/images');
      expect(response.body).toEqual({
        error: 'file name is missing',
      });
      done();
    });

    it('status code should be 400 if file name is missing', async (done) => {
      const response = await request.get('/api/images');
      expect(response.status).toBe(400);
      done();
    });
  });

  describe('Test width query parameter', () => {
    it('Error message should be width value is missing', async (done) => {
      const response = await request.get(
        '/api/images/?filename=icelandwaterfall'
      );
      expect(response.body).toEqual({
        error: 'width value is missing',
      });
      done();
    });
    it('status code should be 400 if width value is missing', async (done) => {
      const response = await request.get(
        '/api/images/?filename=icelandwaterfall'
      );
      expect(response.status).toBe(400);
      done();
    });

    it('Error message should be width value is not a number', async (done) => {
      const response = await request.get(
        '/api/images/?filename=icelandwaterfall&width=zz'
      );
      expect(response.body).toEqual({
        error: 'width value is not a number',
      });
      done();
    });
    it('status code should be 400 if width value is not a number', async (done) => {
      const response = await request.get(
        '/api/images/?filename=icelandwaterfall&width=zz'
      );
      expect(response.status).toBe(400);
      done();
    });
    it('Error message should be must provide positive width value', async (done) => {
      const response = await request.get(
        '/api/images/?filename=icelandwaterfall&width=0'
      );
      expect(response.body).toEqual({
        error: 'must provide positive width value',
      });
      done();
    });
    it('status code should be 400 if width is not a positive value', async (done) => {
      const response = await request.get(
        '/api/images/?filename=icelandwaterfall&width=0'
      );
      expect(response.status).toBe(400);
      done();
    });
  });

  describe('Test height query parameter', () => {
    it('Error message should be height value is missing', async (done) => {
      const response = await request.get(
        '/api/images/?filename=icelandwaterfall&width=500'
      );
      expect(response.body).toEqual({
        error: 'height value is missing',
      });
      done();
    });
    it('status code should be 400 if height value is missing', async (done) => {
      const response = await request.get(
        '/api/images/?filename=icelandwaterfall&width=500'
      );
      expect(response.status).toBe(400);
      done();
    });

    it('Error message should be height value is not a number', async (done) => {
      const response = await request.get(
        '/api/images/?filename=icelandwaterfall&width=500&height=zz'
      );
      expect(response.body).toEqual({
        error: 'height value is not a number',
      });
      done();
    });
    it('status code should be 400 if height value is not a number', async (done) => {
      const response = await request.get(
        '/api/images/?filename=icelandwaterfall&width=500&height=zz'
      );
      expect(response.status).toBe(400);
      done();
    });
    it('Error message should be must provide positive height value', async (done) => {
      const response = await request.get(
        '/api/images/?filename=icelandwaterfall&width=500&height=0'
      );
      expect(response.body).toEqual({
        error: 'must provide positive height value',
      });
      done();
    });
    it('status code should be 400 if height is not a positive value', async (done) => {
      const response = await request.get(
        '/api/images/?filename=icelandwaterfall&width=500&height=0'
      );
      expect(response.status).toBe(400);
      done();
    });
  });

  describe('Test image endpoint when every query parameter is provided with correct values', () => {
    it('status code should be 200', async (done) => {
      const response = await request.get(
        '/api/images/?filename=icelandwaterfall&width=500&height=500'
      );
      expect(response.status).toBe(200);
      done();
    });
  });
});
