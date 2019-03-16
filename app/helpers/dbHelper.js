var mongoose = require('mongoose')
var restAPI = require('../services/restAPI.js')()

module.exports = (app) => {
    let model = mongoose.model('Crypto')
    let { expiredAt } = app.helpers
    let dbHelper = {}

    dbHelper.requestCode = async (key, url) => {
        console.log(`key value: ${key} url value ${url}`)
        let result = await model.find({ 'key': key })
        if(result.length) {
            console.log('data find ' + key)
            if (!expiredAt.ticker(result[0].last)) {
                return result   
            }
            let ticker = await restAPI.getMocka(url)
            // ticker = await restAPI.getTicker(url)
            let saved = await mongoUpdate(result[0]._id, ticker)
            if (saved.ok) {
                console.log('data expired')
                result = await model.find({ 'key': key })
                return result
            }
        } else {
            console.log('data not find')
            let ticker = await restAPI.getMocka(url)
            // ticker = await restAPI.getTicker(url)
            resultWriter = mongoWriter(key, ticker)
            return resultWriter
        }
    }

    mongoWriter = async (key, ticker) => {
        let obj = {}         
        obj.key = key
        obj.last = new Date()
        obj.ticker = ticker 
        let result = await model.create(obj)
        return result
    }

    mongoUpdate = async (id, obj) => {
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