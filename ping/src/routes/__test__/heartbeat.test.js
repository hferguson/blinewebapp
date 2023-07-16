const request = require('supertest');
const app = require('../../app');


it('returns a 200 on call', async () => {
    return request(app)
    .get('/api/ping/heartbeat')
    .send()
    .expect(200);
});

// Simple test to see if we got a heartbeat datestamp
// in the payload.
it('returns a date in the payload', async () => {
    const response = await request(app)
        .get('/api/ping/heartbeat')
        .send()
        .expect(200);
        
    const body = response.body;
    const datestamp = new Date(body.datestamp);
    console.log(`Datestamp is ${datestamp}`);
    expect(datestamp instanceof Date).toEqual(true);
})