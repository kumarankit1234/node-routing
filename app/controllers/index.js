const express = require('express'),
	router = express.Router(),
	suppressions = require('./suppressions'),
	domains = require('./domains');

router.use('/suppressions', suppressions);
router.use('/domains', domains);

module.exports = router;
