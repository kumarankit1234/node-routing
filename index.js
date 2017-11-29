const express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Authorization, Content-Type, Accept'
    );
    next();
});

app.use(require('./app/middleware'));
app.use(require('./app/controllers'));

app.listen(3005, function() {
    console.log('Listening on port 3005...');
});
