let axios = require('axios')
module.exports = (app) => {

    let restApi = {}

    restApi.getTicker = async (url) => {
        try {
            let result = await axios.get(url)
            return result.data
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

    return restApi
}