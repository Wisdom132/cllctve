const UserService = require('../services/user.service');
const BaseControler = require('./BaseController')

class UserController extends BaseControler {
    static async getAllUsers(req, res) {
        let userService = new UserService();
        try {
            let users = await userService.getAllUsers();
            res.json({
                data: users
            })
        } catch (err) {
            console.log(err)
        }

    }


    static async addUser(req, res) {
        let userService = new UserService();
        try {
            let payload = {
                firstName: req.body.firstName
            }
            let users = await userService.addUser(payload);
            res.json({
                data: users,
                msg: 'User created'
            })
        } catch (err) {
            console.log(err)
        }

    }
}

module.exports = UserController;