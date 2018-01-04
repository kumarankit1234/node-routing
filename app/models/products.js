const {
    getDocumentWithExactMatch,
    addDocument,
    getAllDocuments,
    searchDocuments
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

    search: query => {
        return searchDocuments('my_store', 'products', query);
    },

    add: product => {
        console.log(product);
        return addDocument('my_store', 'products', product);
    }
};

module.exports = productModel;
