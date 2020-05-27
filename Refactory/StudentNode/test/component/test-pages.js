var expect = require('chai').expect;
var request = require('request');
describe('Basic mocha test', function () {
    it('Main page content', function (done) {
        request('http://localhost:3400', function (error, response, body) {
            expect(body).to.equal('Hello World!');
            done();
        });
    });

    it('Main page status', function (done) {
        request('http://localhost:3400/api/user', function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
})