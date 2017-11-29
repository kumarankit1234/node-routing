var express = require('express'),
	router = express.Router();

const generateDomain = id => ({
	id: id,
	name: `name ${id}`,
	notes: null,
	lastUsed: null,
	registrationDate: 859573800,
	expirationDate: 1743273000,
	expireIn: 2678,
	blacklistUpdate: 1511932804,
	blacklistDetails: [],
	isPaused: true,
	blacklistTimeseries: [
		{checkedAt: 1511395200000, count: 0},
		{checkedAt: 1511481600000, count: 0},
		{checkedAt: 1511568000000, count: 0},
		{checkedAt: 1511654400000, count: 0},
		{checkedAt: 1511740800000, count: 0},
		{checkedAt: 1511827200000, count: 0},
		{checkedAt: 1511913600000, count: 0}
	],
	status: 'invalid',
	errors: [
		'Domain A record must point to VPS IP(139.59.93.107)',
		'Domain A record must point to VPS IP(139.59.93.107)',
		'Domain A record must point to VPS IP(139.59.93.107)'
	],
	a: ['31.13.69.228'],
	mx: [{exchange: 'msgin.vvv.facebook.com', preference: 10}],
	ns: ['a.ns.facebook.com', 'b.ns.facebook.com'],
	spf: [
		'v=spf1 redirect=_spf.facebook.com',
		'v=spf1 ip4:69.63.179.25 ip4:69.63.178.128/25 ip4:69.63.184.0/25 ip4:66.220.144.128/25 ip4:66.220.155.0/24 ip4:69.171.232.0/24 i,p4:66.220.157.0/25 ip4:69.171.244.0/24 mx -all'
	]
});

const generateDomains = length => {
	let allDomains = [];
	for (let i = 0; i < length; i++) {
		allDomains.push(generateDomain(i));
	}
	return allDomains;
};

router.get('/search', (req, res) => {
	const length = 10000;
	res.json({
		data: {
			total: length,
			domains: generateDomains(length)
		}
	});
});

router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	res.json({domain: generateDomain(id)});
});

module.exports = router;
