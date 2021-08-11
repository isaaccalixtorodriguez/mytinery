const request = require('supertest');
const { app } = require('../api/server');
require('dotenv').config();

let server;
beforeAll(() => {
  server = app.listen(400);
});
describe('GET /cities/all', () => {
  it('Return all cities', async () => {
    const response = await request(app).get('/cities/all');
    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
    expect(response.body.total).toBe(8);
    expect(response.body).not.toBeNull();
    expect(Array.isArray(response.body.response)).toBe(true);
  });
});

describe('GET /cities/city', () => {
  const city = 'Jujuy';
  it('Return city by id', async () => {
    const response = await request(app).get(`/cities/city?name=${city}`);
    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
    expect(response.body).not.toBeNull();
    expect(response.body.response[0].name).toBe(city);
    expect(Array.isArray(response.body.response)).toBe(true);
  });
});

describe('POST /cities', () => {
  it('Return post city', (done) => {
    request(app)
      .post('/cities')
      .send({
        name: 'Santiago',
        country: 'Chile',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.airfrance.com.ar%2Fguia-viajes%2Flondres&psig=AOvVaw2XYnusygWlhIJYs9YMkmtm&ust=1628625654083000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDysMDdpPICFQAAAAAdAAAAABAD',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

afterAll((done) => {
  server.close(done);
});
