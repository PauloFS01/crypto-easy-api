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

    url.fixed = (key) => {
        let result = urlBase.find( elem => elem.name === key).value
        return result
    }

    url.blockchainChart = (period) => {
       let blockchainChart = `https://api.blockchain.info/charts/market-price?timespan=${period}&rollingAverage=hours&format=json`
       return blockchainChart
    }

    url.coindesckChart = (statDate) => {
        let endDate = format(new Date(), 'YYYY-MM-DD')
        let coindesckChart = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${statDate}&end=${endDate}`
        return coindesckChart
     }

    return url
}