module.exports = function (app) {

    var { charts } = app.api
    var { limiter } = app.infra

    app.route('/blockchainchart/:period')
    .get(limiter, charts.blockChainBTC)

    app.route('/coindeskchart')
    .get(limiter, charts.coindeskBTC)
}

/* 
routes period, 1week, 2week, 1months
*/