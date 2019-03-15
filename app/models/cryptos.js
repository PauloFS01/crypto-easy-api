var mongoose = require('mongoose');

var schema = mongoose.Schema({
    
    key: String,
    ticker: Object,
    last: String,
    
}, {
    versionKey: false 
});

mongoose.model('Crypto', schema);