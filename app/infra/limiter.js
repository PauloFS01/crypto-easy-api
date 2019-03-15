var RateLimit = require('express-rate-limit');
var RedisStore = require('rate-limit-redis');
module.exports = function (app) {

  let { redisClient } = app.infra

    const limiter = new RateLimit({
        store: new RedisStore({
          client: redisClient,
        }),
        windowMs: 5 * 60 * 1000, // 5 minutes
        max: 10, // limit each IP to 100 requests per windowMs
        delayMs: 0, // disable delaying - full speed until the max limit is reached
        message: 'Too many requests from this IP, please try again after five minutes'
      });

    return limiter
}   