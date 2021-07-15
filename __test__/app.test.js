const request = require('supertest');
const app = require('../app');

describe('Probar nuestro servidor de express', () => {
    test('Debe responder al metodo GEt', () => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});