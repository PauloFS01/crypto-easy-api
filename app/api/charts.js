module.exports = function (app) {

    let { urlFile, dbHelper } = app.helpers
    var charts = {};

    charts.blockChainBTC = async (req, res) => {
        let period = req.params.period
        let url = urlFile.blockchainChart(period)
        if (!url) res.status(400).json(`${period} not fount try a different period`)
        try {
            let result = await dbHelper.requestCode('blockchainChart', '../mock/blockChain1Mount.json')
            // let result = await requestCode('bitValorTiker', url)
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    charts.coindeskBTC = async (req, res) => {
        let url = urlFile.coindesckChart()
        try {
            let result = await dbHelper.requestCode('coindeskBTC', '../mock/coindeskChart1week.json')
            // let result = await requestCode('bitValorTiker', url)
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    return charts;
}