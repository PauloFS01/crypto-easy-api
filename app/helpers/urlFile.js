var dateFns = require('date-fns')

module.exports = () => {

    let url = {}
    let urlBase = [

        { 'name': 'blockchainTicker', 'value': 'https://blockchain.info/pt/ticker' },
        { 'name': 'bitValorTiker', 'value': 'https://api.bitvalor.com/v1/ticker.json' },
        { 'name': 'cryptoCompareTiker', 'value': 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,LTC,BCH,ETH,XRP,EOS,QTUM,XLM,ETC,XMR,BTG,TRX,BNB,NEO,GAS,ONT,ZEC,IOT,GVT,DGD' },
        { 'name': 'blockchainChart', 'value': 'https://api.blockchain.info/charts/market-price?timespan=1months&rollingAverage=8hours&format=json' },
        { 'name': 'coindesckChart', 'value': 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05' },
        { 'name': 'bitValorOrderBook', 'value': 'https://api.bitvalor.com/v1/order_book_stats.json' }
    ]

    let urlBaseChart = [
        { 'name': '1week', 'value': 'https://api.blockchain.info/charts/market-price?timespan=1week&rollingAverage=8hours&format=json' },
        { 'name': '2week', 'value': 'https://api.blockchain.info/charts/market-price?timespan=2week&rollingAverage=8hours&format=json' },
        { 'name': '1months', 'value': 'https://api.blockchain.info/charts/market-price?timespan=2week&rollingAverage=8hours&format=json' }
    ]

    url.fixed = (key) => {
        console.log('test blockchain')
        let result = urlBase.find( elem => elem.name === key).value
        return result
    }

    url.blockchainChart = (period) => {
        let result = urlBaseChart.find( elem => elem.name === period).value
        return result
    }

    url.coindesckChart = () => {
        let endDate = dateFns.format(new Date(), 'YYYY-MM-DD')
        var startDate = dateFns.format(previousDate(), 'YYYY-MM-DD')
        let coindesckChart = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
        return coindesckChart
     }

     function previousDate () {
        var setDay = new Date().getDate() - 6
        var trampoline = new Date()
        trampoline.setDate(setDay)
        return trampoline
      }

    return url
}