const {
    getDocumentWithExactMatch,
    addDocument,
    getAllDocuments
} = require('../services/ElasticSearch');

const productModel = {
    get: productID => {
        return getDocumentWithExactMatch('my_store', 'products', {
            _id: productID
        });
    },

    getAll: () => {
        return getAllDocuments('my_store', 'products');
    },

    add: product => {
        return addDocument('my_store', 'products', product);
    }
};

module.exports = productModel;
