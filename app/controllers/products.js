const express = require('express'),
    router = express.Router(),
    productModel = require('../models/products');

router.get('/', (req, res) => {
    productModel.getAll().then(response => res.json({ data: response }));
});

router.get('/:productId', (req, res) => {
    const { productId } = req.params;
    productModel.get(productId).then(response => res.json({ data: response }));
});

router.post('/', (req, res) => {
    const { product } = req.body;
    productModel.add(product).then(response =>
        res.json({
            data: response
        })
    );
});

module.exports = router;
