var mongoose = require('mongoose')

module.exports = (app) => {
    let model = mongoose.model('Crypto')
    let { restAPI } = app.services    
    let { expiredAt } = app.helpers   
    let dbHelper = {}

    dbHelper.requestCode = async (key, url) => {
        let result = await model.find({ 'key': key })
        if(result.length) {
            console.log('data find ' + key)
            if (!expiredAt.ticker(result[0].last)) {
                console.log('data not expired')
                return result   
            }
            ticker = await restAPI.getMocka(url)
            // ticker = await restAPI.getTicker(url)
            let saved = await mongoUpdate(result[0]._id, ticker)
            if (saved.ok) {
                console.log('data expired')
                result = await model.find({ 'key': key })
                return result
            }
        } else {
            console.log('data not find')
            ticker = await restAPI.getMocka(url)
            // ticker = await restAPI.getTicker(url)
            resultWriter = mongoWriter(key, ticker)
            return resultWriter
        }
    }

    dbHelper.mongoWriter = async (key, ticker) => {
        let obj = {}         
        obj.key = key
        obj.last = new Date()
        obj.ticker = ticker 
        let result = await model.create(obj)
        return result
    }

    dbHelper.mongoUpdate = async (id, obj) => {
        let result = await model.updateOne(
            { _id: id},
            {
                $set: {
                    ticker: obj,
                    last: new Date()
                }
            },
        )
        return result
    }
    return dbHelper
}