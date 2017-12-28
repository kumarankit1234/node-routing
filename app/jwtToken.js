const jwt = require('jsonwebtoken');

module.exports = {
    getToken: payload => {
        return jwt.sign(payload, process.env.SECRET);
    },

    verifyToken: token => {
        try {
            const decodedValueOfToken = jwt.decode(token, process.env.SECRET);
            return decodedValueOfToken;
        } catch (error) {
            return false;
        }
    }
};
