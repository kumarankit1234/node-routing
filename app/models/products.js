const { getDocumentWithExactMatch } = require('../../elastic-search');
// let exports = (module.exports = {});

exports.getDocumentWithMatch = productID => {
    return getDocumentWithExactMatch('my_store', 'products', {
        productID: 'XHDK-A-1293-#fJ3'
    });
};
