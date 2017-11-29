const express = require('express'),
	router = express.Router(),
	suppressions = require('./suppressions'),
	domains = require('./domains'),
	identities = require('./identities');

router.use('/suppressions', suppressions);
router.use('/domains', domains);
router.use('/identities', identities);

module.exports = router;
