var express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    const lists = [];
    for (let i = 1; i <= 10; i++) {
        lists.push({
            count: i * 100,
            createdAt: 1507649492,
            createdBy: 'Site Admin ADF',
            id: i,
            isGlobal: false,
            name: `New List${i}`,
            siteId: 1,
            updatedAt: 1510665639,
            updatedBy: 'Site Admin ADF'
        });
    }
    res.json({ data: lists });
});

router.get('/:id', (req, res) => {
    const records = [];
    const id = req.params.id;
    for (let i = 1; i <= 10000; i++) {
        records.push({
            createdAt: 1510175493,
            createdBy: 'Site Admin ADF',
            id: i,
            md5: '85853db052e8e289c083261f1b6babaf',
            type: 'email',
            value: 'example1@example.com'
        });
    }
    const list = {
        count: 9,
        createdAt: 1507649492,
        createdBy: 'Site Admin ADF',
        id,
        isGlobal: false,
        name: 'New List',
        siteId: 1,
        records,
        updatedAt: 1510665639,
        updatedBy: 'Site Admin ADF'
    };
    res.json({ data: list });
});

module.exports = router;
