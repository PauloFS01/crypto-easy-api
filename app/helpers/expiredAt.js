module.exports = function () {
    var expired = {}

    expired.token = function (seconds) {
        const expiredDate = new Date();
        expiredDate.setSeconds(expiredDate.getSeconds() + seconds);
        return expiredDate;        
    }

    expired.ticker = (date) => {
        var baseDate = new Date().setMinutes(new Date().getMinutes() - 1)
        return new Date(date) < new Date(baseDate)
    }

    return expired;
};