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
    let usersDao;
    let baseModel;
    const userModel = { findAll: () => { } };
    
    before(function () {
        usersDao = require('../../../src/api/models/user/usersDao');
        baseModel = require('../../../src/models/baseModel');
    });
​
    beforeEach(() => {
        sandbox = sinon.createSandbox();
        sandbox.stub(baseModel);
        sandbox.stub(userModel);
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
            baseModel.getModels.resolves({
                taskModel: userModel,
                
            });
            userModel.findAll.resolves([
                { toJSON: () => ({ data: 213782563 }) },
                { toJSON: () => ({ data: 364327645 }) },
            ]);
            const data = await usersDao.getAll();
            expect(data).to.be.eql([{ data: 213782563 }, { data: 364327645 }]);
            expect(userModel.findAll).to.have.been.calledOnceWith({
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