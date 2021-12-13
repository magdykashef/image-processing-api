import supertest from 'supertest';
import app from '..';

const request = supertest(app);

describe('Test main endpoint responses', () => {
  it('status code should be 200', async (done) => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    done();
  });
});
