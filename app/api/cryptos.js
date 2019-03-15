var mongoose = require('mongoose')

module.exports = function (app) {
    let model = mongoose.model('Crypto')

    let { restAPI } = app.services
    let { expiredAt, urlFile } = app.helpers    
    cryptos = {}

    cryptos.bitvalorBTC = async (req, res) => {
        let period = req.params.period
        let url = urlFile.fixed('bitValorTiker')
        try {
            let result = await requestCode('bitValorTiker', '../mock/bitValorModel.json')
            // let result = await requestCode('bitValorTiker', url)
            if(period) {
                res.status(200).json(result[0].ticker.data[period])
            } else {
                res.status(200).json(result)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

    cryptos.blockchainBTC = async (req, res) => {
        let url = urlFile.fixed('blockchainTicker')
        try {
            let result = await requestCode('blockchainTicker', '../mock/blockchainTickers.json')
            // let result = await requestCode('blockchainTicker', url)
            res.status(200).json(result)          
        } catch (error) {
            res.status(500).json(error)
        }
    }

    cryptos.cryptoCompareBTC = async (req, res) => {
        let url = urlFile.fixed('cryptoCompareTiker')
        try {
            let result = await requestCode('cryptoCompareTiker', '../mock/cryptoCompare.json')
            // let result = await requestCode('cryptoCompareTiker', url)
            res.status(200).json(result)          
        } catch (error) {
            res.status(500).json(error)
        }        
    }    

    async function requestCode (key, url) {
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

    async function mongoWriter (key, ticker) {
        let obj = {}         
        obj.key = key
        obj.last = new Date()
        obj.ticker = ticker 
        let result = await model.create(obj)
        return result
    }

    async function mongoUpdate (id, obj) {
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

    return cryptos;
}