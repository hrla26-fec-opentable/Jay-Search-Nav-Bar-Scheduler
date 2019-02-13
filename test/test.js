const request = require('supertest');
const app = require('../server/app.js');

describe('Test response type', () => {
    test('GET method response type should be an array', (done) => {
        request(app).get('/api/nav/Los_Angeles').then((response) => {
            console.log(response)
            expect(Array.isArray(response.body)).toBe(true);
            done();
        });
    });
});

