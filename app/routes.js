/**
 * All the routes for the application
 */

const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    suppressions = require('./controllers/suppressions'),
    domains = require('./controllers/domains'),
    identities = require('./controllers/identities'),
    products = require('./controllers/products'),
    login = require('./controllers/login'),
    middlewares = require('./middleware'),
    { CORS, auth } = middlewares;

/**
 * Use Cors middleware for all routes
 * to allow server to accept requests from any domain
 */
router.use(CORS);
router.use(
    bodyParser.urlencoded({
        extended: true
    })
);
router.use('/login', login);

/**
 * Use Authentication middleware for all
 * the routes the needs the user to be authenticated
 */
router.use(auth);
/**
 * Parse the json body in the request
 * and add it to request.body object
 */
router.use(bodyParser.json());

router.use('/suppressions', suppressions);
router.use('/domains', domains);
router.use('/identities', identities);
router.use('/products', products);

module.exports = router;
