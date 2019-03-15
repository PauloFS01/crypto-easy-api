var Redis = require("ioredis")

module.exports = () => {
    const client = new Redis();
    return client
}