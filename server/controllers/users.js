const usersDBService = require('../services/users.db');
const usersService = require('../services/users');

class UsersController {
    async insertUsers(users) {
        await usersDBService.insertUsers(users);
    }

    async getUsersInfo(userIds) {
        const info = await usersService.getUsersInfo(userIds);
        return info;
    }
}

module.exports =  new UsersController();
