module.exports = function (app) {
    var { users } = app.api;

    app.route('/user')
    .get(users.save);
}