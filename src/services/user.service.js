const User = require('../models/user')
class UserService {
    async getAllUsers() {
        return await User.find()
    }

    async addUser(payload) {
        return await User.create(payload)
    }
}
module.exports = UserService


