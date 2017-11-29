var express = require('express'),
    router = express.Router();

const generateIdentity = id => ({
    id,
    siteId: 1,
    domainInfoId: 8,
    name: `name ${id}`,
    accountId: 1,
    status: 'invalid',
    statusDesc: null,
    statusLastUpdated: null,
    footerId: 3,
    isActive: true,
    isValid: false,
    blacklistUpdatedAt: 1511951405,
    isBlacklisted: 0,
    blacklistDetails: '[]',
    updatedAt: 1508694014,
    isPaused: false,
    engineName: 'SES',
    accountAlias: 'SES-SANDBOX-ARVIND #1',
    identityType: 'domain',
    blacklistCount: 0,
    campaigns: [],
    footerName: 'Gagi',
    footerDetails: 'Gagi'
});

const generateIdentities = length => {
    let allDomains = [];
    for (let i = 0; i < length; i++) {
        allDomains.push(generateIdentity(i));
    }
    return allDomains;
};

router.post('/search', (req, res) => {
    const length = 10000;
    res.json({
        data: {
            total: length,
            identities: generateIdentities(length)
        }
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.json({ data: generateIdentity(id) });
});

module.exports = router;
