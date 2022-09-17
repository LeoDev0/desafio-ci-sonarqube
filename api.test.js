const request = require('supertest');
const app = require('./api');

describe('GET /isOdd/:num', () => {
    it('should return 400 if num is not a number', async () => {
        const response = await request(app).get('/isOdd/abc');
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('abc is not a number');
    });

    it(`should return 200 if num is a valid number and true if it's an odd number`, async () => {
        const response = await request(app).get('/isOdd/1');
        expect(response.status).toBe(200);
        expect(response.body.isOdd).toBe(true);
    });

    it(`should return 200 if num is a valid number and false if it's an even number`, async () => {
        const response = await request(app).get('/isOdd/2');
        expect(response.status).toBe(200);
        expect(response.body.isOdd).toBe(false);
    });
});
