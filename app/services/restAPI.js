let axios = require('axios')
module.exports = (app) => {
    let restApi = {}

    restApi.getTicker = async (url) => {
        try {
            let result = await axios.get(url)
            return result
        } catch (error) {
            console.log(error)
        }
    }

    restApi.getMocka = async (url) => {
        try {
            let result = await require(url)
            return result
        } catch (error) {
            console.log(error)
        }
    }

    restApi.blockchainTicker = async () => {
        try {
            let result = await axios.get('https://blockchain.info/pt/ticker')
            console.log(`sombody callme ${result}`)
            return result.data            
        } catch (error) {
            console.log(error)
        }
    }

    restApi.bitValorTiker = async () => {
        let result = await axios.get('https://api.bitvalor.com/v1/ticker.json')
        return result.data
    }

    restApi.cryptoCompareTiker = async () => {
        let result = await axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,LTC,BCH,ETH,XRP,EOS,QTUM,XLM,ETC,XMR,BTG,TRX,BNB,NEO,GAS,ONT,ZEC,IOT,GVT,DGD')
        return result.data
    }

    restApi.blockchainChart = async (period) => {
        let result = await axios.get('https://api.blockchain.info/charts/market-price?timespan=1months&rollingAverage=8hours&format=json')
        return result.data
    }

    restApi.coindesckChart = async (period) => {
        let result = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05')
        return result.data
    }
    
    restApi.bitValorOrderBook = async () => {
        let result = await axios.get('https://api.bitvalor.com/v1/order_book_stats.json')
        return result.data
    }

    return restApi
}