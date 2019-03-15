var app = require('./config/custom-express')();
let database = require('./config/configEnv')();
require('./config/database');

app.listen (process.env.PORT || 3000, function() {	
	if (process.env.PORT) {
		console.log('serve run database: ' + database.db);
	} else {
		console.log('serve run in 3000 door: ' + database.db);
	}	
});