const mongoose = require('mongoose');

class UsersDbService {
    User = mongoose.model("User");

    async insertUsers(users) {
        await this.User.insertMany(users);
    }

    async getUserById(userId) {
        return this.User.findOne({userId});
    }
}

module.exports =  new UsersDbService();
