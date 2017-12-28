const express = require('express'),
    router = express.Router(),
    userModel = require('../models/user'),
    jwt = require('../jwtToken');

router.post('/', (req, res) => {
    const { username, password } = req.body;
    const isCredentialValid = userModel.isCredentialValid({
        username,
        password
    });
    if (isCredentialValid) {
        const payload = {
            username
        };
        const jwtToken = jwt.getToken(payload);
        res.json({
            success: true,
            token: jwtToken
        });
    } else {
        res.json({
            success: false
        });
    }
});

module.exports = router;
