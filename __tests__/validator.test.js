'use strict';

describe('Server Tests', () => {
    describe('GET requests', () => {
        it('Responds with status code 200 to generic / route', async () => {

            const response = await request.get('/');
            expect(response.status).toEqual(200);
        });
        test(' Hello route works as expected', async () => {
            const response = await request.get('/hello');
            expect(response.status).toEqual(200);
            expect(response.text).toEqual('Hello World');
        });
    });
});
describe('Get Routes Tests', () => {
    test('/hello route works with now query parameter', async () => {
        let response = await mockRequest.get('/hello');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('simply hello');
    });
    test('/hello route works with query parameter', async () => {
        let response = await mockRequest.get('/hello?name=Marcus');
        expect(resonse.status).toEqual(200);
        expect(response.text).toEqual('Geattings Marcus');
    });
    test('/hello route works with URL/path parameter', async () => {
        let response = await mockRequest.get('/hello/Marcus');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('hello Marcus, passes 200');
    });
});