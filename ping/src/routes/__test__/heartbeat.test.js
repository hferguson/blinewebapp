const request = require('supertest');
const app = require('../../app');

it('returns a 200 on call', async () => {
    return request(app)
    .get('/api/ping/heartbeat')
    .send()
    .expect(200);
});