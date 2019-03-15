/* 
var redis = require("redis")

module.exports = () => {

    let cache = {}
    let client = redis.createClient();

    client.on('connect', function() {
      console.log('Connected to Redis...')
    })

    cache.blockchainBTC = async (req, res, next) => {
        console.log('somebody call me!!')
        try {
            await client.hgetall('blockchainBTC', function (err, obj) {
                if(!obj) {
                    next()
                } else {
                    console.log(`come to redis ${obj}`)
                    res.status(200).json(obj)
                }
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    cache.bitvalorBTC = async (req, res, next) => {
        let param = req.key
        console.log(`ok cache ${param}`)
        next()
    }

    cache.cryptoCompareBTC = async (req, res, next) => {
        console.log('ok cache')
        next()
    }

    return cache
}
*/