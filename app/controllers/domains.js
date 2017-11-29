var express = require('express'),
	router = express.Router(),
	domainsMock = require('../mocks/domains').getDomains;

router.get('/search', (req, res) => {
	res.json(domainsMock);
});
router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	if (!isNaN(id)) {
		const response = domainsMock.data.domains.find(
			domain => domain.id === parseInt(id, 10)
		);
		return res.json(response);
	}
	next();
});

module.exports = router;
