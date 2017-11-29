const express = require('express'),
	app = express();

app.use(express.static(__dirname + '/public'));
app.use(require('./app/middleware'));
app.use(require('./app/controllers'));

app.listen(3005, function() {
	console.log('Listening on port 3005...');
});
