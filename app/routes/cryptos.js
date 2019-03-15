module.exports = function (app) {

    var { cryptos } = app.api
    var { limiter } = app.infra

    app.route('/bitvalor/:period')
    .get(limiter, cryptos.bitvalorBTC)

    app.route('/bitvalor')
    .get(limiter, cryptos.bitvalorBTC)

    app.route('/blockchain')
    .get(limiter, cryptos.blockchainBTC)

    app.route('/cryptocompare')
    .get(limiter, cryptos.cryptoCompareBTC)

}