var mongoose = require('mongoose');

var schema = mongoose.Schema({
    
    key: String,
    service: String,
    desc: String,
    
}, {
    versionKey: false 
});

mongoose.model('Keys', schema);