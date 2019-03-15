var mongoose = require('mongoose'); 
let database = require('./configEnv')()
// import database from '/configEnv';

mongoose.connect(database.db + '/easy', { useNewUrlParser: true });

mongoose.connection.on('connected', function() {
    console.log('Connect with MongoDB')
});

mongoose.connection.on('error', function(err) {
    console.log('err to connect' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Disconnect from mongoDB!');
});

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Aplication finished, closing connection with mongoDB');
        process.exit(0);
    });
})