var mongoose = require('mongoose');

module.exports = function () {
    var userHelper = {};
    var model = mongoose.model('Users');

    userHelper.search = async function (target) {
        let result = await model.find({$and: [{'user': target.user}, {'password': target.password}]});
        return result;
    }
    return userHelper;
}