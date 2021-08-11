const request = require('supertest');
const { app } = require('../api/server');
require('dotenv').config();

let server;
beforeAll(() => {
  server = app.listen(400);
});
describe('GET /itineraries/all', () => {
  it('Return all itineraries', async () => {
    const response = await request(app).get('/itineraries/all');
    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
    expect(response.body.total).toBe(3);
    expect(response.body).not.toBeNull();
    expect(Array.isArray(response.body.response)).toBe(true);
  });
});

describe('GET /itineraries/{cityId}', () => {
  it('Return itineraries by city name', async () => {
    const response = await request(app).get('/itineraries/610d8edf7214d40a24b73cf7');
    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
    expect(response.body).not.toBeNull();
    expect(Array.isArray(response.body.response)).toBe(true);
  });
});

describe('POST itineraries', () => {
  it('Return post itineraries', (done) => {
    request(app)
      .post('/itineraries')
      .send({
        title: 'Tour',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.airfrance.com.ar%2Fguia-viajes%2Flondres&psig=AOvVaw2XYnusygWlhIJYs9YMkmtm&ust=1628625654083000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDysMDdpPICFQAAAAAdAAAAABAD',
        authorName: 'author',
        authorPic: 'author',
        price: 3,
        duration: 1,
        cityId: '610c7e2e692c5c3064abe8dc',
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
