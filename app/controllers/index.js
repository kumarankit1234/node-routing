const express = require('express'),
    router = express.Router();

router.use('/suppressions', require('./suppressions'));

module.exports = router;
