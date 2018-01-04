const fetch = require('node-fetch');
const ES_URI = process.env.ES_URI;

const ElasticSearchService = {
    getDocumentWithExactMatch: async (index, type, term) => {
        const res = await fetch(`${ES_URI}/${index}/${type}/_search`, {
            body: JSON.stringify({
                query: {
                    constant_score: {
                        filter: {
                            term: term
                        }
                    }
                }
            }),
            method: 'POST'
        });
        const jsonRes = await res.json();
        return jsonRes;
    },

    addDocument: async (index, type, product) => {
        const res = await fetch(`${ES_URI}/${index}/${type}`, {
            body: JSON.stringify(product),
            method: 'POST'
        });
        const jsonRes = await res.json();
        return jsonRes;
    },

    getAllDocuments: async (index, type) => {
        const res = await fetch(`${ES_URI}/${index}/${type}/_search`, {
            method: 'POST'
        });
        const jsonRes = await res.json();
        return jsonRes;
    },

    searchDocuments: async (index, type, searchquery) => {
        const res = await fetch(`${ES_URI}/${index}/${type}/_search`, {
            body: JSON.stringify({
                query: {
                    match: searchquery
                }
            }),
            method: 'POST'
        });
        const jsonRes = await res.json();
        return jsonRes;
    }
};

module.exports = ElasticSearchService;
