'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);


describe('Server Tests', () => {
    describe('Error Handler Tests', () => {
        test('404 on a bad route', async () => {
            let response = await mockRequest.get('/foo');
            expect(response.status).toEqual(404);
            expect(response.text).toEqual('Not Found');
        });
        test('404 on a bad method', async () => {
            let response = await mockRequest.put('/hello');
            expect(response.status).toEqual(404);
            expect(response.text).toEqual('Not Found');
        });
    });
    describe('Server Side Test', () => {
        test('500 no name in query string', async () => {
            let response = await mockRequest.get('/bar');
            expect(response.status).toEqual(500);
            expect(response.text).toEqual('/server side problems')
        });
    });
});