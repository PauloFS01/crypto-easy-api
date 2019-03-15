var mongoose = require('mongoose');

module.exports = function (app) {
    var users = {};
    var model = mongoose.model('Users');

    users.save = async function (req, res) {
        try {
            let name = await nameVerify (req.user.name);
            if (!name.length) {
                await model.create(req.user);
                res.status(200).json('User registred');
            } else {
               res.status(401).json('Username not available');
            }
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async function nameVerify (name) {
        let result = await model.find({'user': name});        
        return result;
    };

    return users;
}