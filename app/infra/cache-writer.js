/*
var redis = require("redis")

module.exports = () => {
    let cacheWriter = {}
    let client = redis.createClient()

    client.on('connect', function() {
        console.log('Connected to Redis...')
    })

    cacheWriter.save = (id, ticker) => {
        // console.log('saving in redis' + ticker.data.USD)
        client.hmset(id, ticker, (err, reply) => {
            if (err) console.log('redis error: '  + err)
            return reply
        })
    }

    return cacheWriter
}
*/