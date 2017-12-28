const jwt = require('../jwtToken');

/**
 * All the middlewares used in the application are listed here
 */
module.exports = {
    /**
     * Adds required headers in the response to
     * accept requests from a client from a different domain
     */

    CORS: function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Authorization, Content-Type, Accept'
        );
        next();
    },

    /**
     * Authorization middlware. Checks the auth token is valid
     * and adds the user information in the request to be passed on to the next middleware
     */
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
