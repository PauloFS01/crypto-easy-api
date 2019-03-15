module.exports = function (app) {

    let { urlFile, dbHelper } = app.helpers
    var chart = {};

    chart.blockChainBTC = async (req, res) => {
        let period = req.period;
        let url = urlFile.blockchainChart(period)
        try {
            let result = await dbHelper.requestCode('blockchainChart', '../mock/bitValorModel.json')
            // let result = await requestCode('bitValorTiker', url)
            if(period) {
                res.status(200).json(result)
            } else {
                res.status(200).json(result)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

    chart.coindeskBTC = async (req, res) => {
        let period = req.period;
        let url = urlFile.blockchainChart(period)
        try {
            let result = await dbHelper.requestCode('coindeskBTC', '../mock/bitValorModel.json')
            // let result = await requestCode('bitValorTiker', url)
            if(period) {
                res.status(200).json(result)
            } else {
                res.status(200).json(result)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

    return chart;
}