const jwt = require('../jwtToken');

module.exports = {
    CORS: function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Authorization, Content-Type, Accept'
        );
        next();
    },

    auth: (req, res, next) => {
        const authHeader = req.get('Authorization');
        const authHeaderArray = authHeader.split(' ');
        if (authHeaderArray.length === 2 && authHeaderArray[0] === 'Bearer') {
            const decodedToken = jwt.verifyToken(authHeaderArray[1]);

            if (!decodedToken) {
                res.json({
                    error: 'Invalid Token'
                });
            } else {
                req.user = decodedToken;
                next();
            }
        } else {
            res.json({
                error: 'Invalid Token'
            });
        }
    }
};
