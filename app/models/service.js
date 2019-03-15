var mongoose = require('mongoose');

var schema = mongoose.Schema({
    
    adress: String,
    desc: String,
    name: String,
        
}, {
    versionKey: false 
});

mongoose.model('Services', schema);