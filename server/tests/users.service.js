const sinon = require("sinon");
const chai = require("chai");

const mongoose = require('mongoose');
mongoose.model('User', new mongoose.Schema());

const UsersDb = require("../services/users.db");
const usersService = require("../services/users");

describe("Users Service", () => {
    let getUserByIdStub;

    beforeEach(() => getUserByIdStub = sinon.stub(UsersDb, "getUserById"));

    afterEach(() => getUserByIdStub.restore());

    it("Successful call", async () => {
        const {expect} = chai;
        const users = [{
                id: 3432,
                name: "Moshe The King",
                age: 65
            },
            {
                id: 5874,
                name: "Chen Levy",
                age: 30
            },
        ];

        getUserByIdStub.onCall(0).returns(Promise.resolve(users[0]));
        getUserByIdStub.onCall(1).returns(Promise.resolve(users[1]));

        const res = await usersService.getUsersInfo([3432, 5874]);
        const usersAgeAverage = (users[0].age + users[1].age) / users.length;
        expect(res.users.length).to.equal(users.length);
        expect(res.averageAges).to.equal(usersAgeAverage);
    });

   it("User without age field", async () => {
       const {assert} = chai;
        const user = {
           id: 3432,
           name: "Moshe The King",
        };

        getUserByIdStub.returns(Promise.resolve(user));
        try {
            await usersService.getUsersInfo([3432]);
            assert.equal(true, false);
        } catch (e) {
            assert.equal(e.message, "User without age!");
        }
   });

    it("User not found", async () => {
        const {assert} = chai;
        const user = null;

        getUserByIdStub.returns(Promise.resolve(user));
        try {
            await usersService.getUsersInfo([3432]);
            assert.equal(true, false);
        } catch (e) {
            assert.equal(e.message, "User not found!");
        }
    })
});
