var jwt = require ('jsonwebtoken'); 

module.exports = function (app) {
    var { expiredAt, userHelper }  = app.helpers;          
    var auth = {};
    var target = {};
    auth.authenticate = async function (req, res) {
        target.user = req.body.user;
        target.password = req.body.password;
        let data = {}
        try {
            let result = await userHelper.search(target);        
            if(result.length){
               var token = jwt.sign({user: target.user}, 'blackphillip', {expiresIn:84600});
                data.user = target.user;
                data.token = token;
                data.expiredAt = expiredAt.token(84600);
                res.status(200).json(data);
            } else {
                res.status(401).json('not authenticate user or password wrong');
            }
        } catch (error) {
            res.status(500).json('Internal error');
        }
    };

    auth.verify = function (req, res, next) {
        var token = req.headers['x-access-token'];
        if(token) {
            jwt.verify(token,'blackphillip', function(err, decoded) {
                if (err) {
                    return res.sendStatus(401);
                }
            })
        } else {
            return res.sendStatus(401);
        };
        next();
    };

    return auth;
}