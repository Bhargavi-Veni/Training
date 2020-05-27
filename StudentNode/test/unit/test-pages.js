var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://localhost:3400' , function(error, response, body) {
        expect(body).to.equal('Hello World!');
        done();
    });
});


'use strict';
​
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const { expect } = chai;
​
describe('Task DAO', function () {
    let sandbox;
    let taskDao;
    let mockbaseDao;
    const mockTaskModel = { findAll: () => { } };
    const mockCommentModel = { test: 12345 };
    before(function () {
        taskDao = require('../../../src/modules/taskDAO');
        mockbaseDao = require('../../../src/modules/baseDao');
    });
​
    beforeEach(() => {
        sandbox = sinon.createSandbox();
        sandbox.stub(mockbaseDao);
        sandbox.stub(mockTaskModel);
    });
    afterEach(() => {
        sandbox.restore();
    });
​
    after(function () {
    });
​
    describe.only('getAll Method', function () {
        it('should return tasks', async () => {
            mockbaseDao.getModels.resolves({
                taskModel: mockTaskModel,
                commentModel: mockCommentModel
            });
            mockTaskModel.findAll.resolves([
                { toJSON: () => ({ data: 213782563 }) },
                { toJSON: () => ({ data: 364327645 }) },
            ]);
            const data = await taskDao.getAll();
            expect(data).to.be.eql([{ data: 213782563 }, { data: 364327645 }]);
            expect(mockTaskModel.findAll).to.have.been.calledOnceWith({
                attributes: [
                    ['taskName', 'name'],
                    ['taskDetails', 'details']
                ],
                include: [{
                    model: mockCommentModel,
                    attributes: [['comment', 'userComment']]
                }]
            });
        });
    });
    describe('add method', function () {
    });
});