const UsersDb = require('./users.db');

class UsersService {
    async getUsersInfo(userIds) {
        const promises = [];
        const users = [];
        const times = {};
        let averageAges = 0;
        try {
            userIds.forEach((id) => {
                const startTime = Date.now();
                promises.push(UsersDb.getUserById(id).then((user) => {
                    if(!user) {
                        throw new Error("User not found!");
                    }

                    if (!user.age) {
                        throw new Error("User without age!");
                    }

                    times[user.userId] = Date.now() - startTime;
                    averageAges += user.age;
                    users.push(user);
                }));
            });

            await Promise.all(promises);

            return {users, times, averageAges: averageAges / userIds.length};
        } catch (e) {
            return Promise.reject(e);
        }
    }
}

module.exports = new UsersService();
