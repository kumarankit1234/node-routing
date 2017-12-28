const express = require('express'),
    router = express.Router(),
    productModel = require('../models/products');

router.get('/', (req, res) => {
    productModel
        .getDocumentWithMatch('XHDK-A-1293-#fJ3')
        .then(response => res.json({ data: response }));
});

module.exports = router;
