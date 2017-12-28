const express = require('express'),
    app = express();
const t = require('dotenv').config();

app.use(require('./app/routes'));

app.listen(3005, function() {
    console.log('Listening on port 3005...');
});
