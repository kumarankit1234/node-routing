var express = require('express'),
    router = express.Router(),
    domainsMock = require('../mocks/domains');

router.get('/', (req, res) => {
    res.json(domainsMock);
});

module.exports = router;
