var mongoose = require('mongoose');

var schema = mongoose.Schema({
    
    user: String,
    password: String,
    keys: String,
    services: String
    
}, {
    versionKey: false 
});

mongoose.model('Users', schema);