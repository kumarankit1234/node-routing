const fetch = require('node-fetch');
const fs = require('fs');
const INDEX = 'megacorp';
const TYPE = 'employee';
const BASE_URI = 'http://localhost:9200';

const addDocument = (doc, index, type) => {
    fetch(`${BASE_URI}/${index}/${type}`, {
        method: 'POST',
        body: JSON.stringify(doc)
    })
        .then(res => res.json())
        .then(res => console.log(res));
};

const getDocuments = (index, type, searchQuery) => {
    debugger;
    fetch(`${BASE_URI}/${index}/${type}/_search`, {
        body: JSON.stringify({ query: searchQuery }),
        method: 'POST'
    })
        .then(res => {
            return res.json();
        })
        .then(res => {
            console.log(JSON.stringify(res));
            fs.writeFile('abc.txt', JSON.stringify(res));
        });
};

const aggsDocuments = (index, type, aggsQuery) => {
    fetch(`${BASE_URI}/${index}/${type}/_search`, {
        body: JSON.stringify({ aggs: aggsQuery }),
        method: 'POST'
    })
        .then(res => {
            return res.json();
        })
        .then(res => {
            console.log(JSON.stringify(res));
            fs.writeFile('abc.txt', JSON.stringify(res));
        });
};

/*
Term query is used to find exact match.
Constant_score is used to remove the score .
*/
exports.getDocumentWithExactMatch = async (index, type, term) => {
    const res = await fetch(`${BASE_URI}/${index}/${type}/_search`, {
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
};

const deleteIndex = index => {
    fetch(`${BASE_URI}/${index}`, {
        method: 'DELETE'
    });
};

const createNewMapping = async (index, mappings) => {
    const res = await fetch(`${BASE_URI}/${index}`, {
        method: 'PUT',
        body: JSON.stringify({ mappings })
    });

    const jsonRes = await res.json();
    console.log(JSON.stringify(jsonRes));
};

const addBulkDocuments = async (index, type, data) => {
    const res = await fetch(`${BASE_URI}/${index}/${type}`, {
        method: POST,
        body: JSON.stringify(data)
    });

    const jsonRes = await res.json();
    console.log(JSON.stringify(jsonRes));
};

// addDocument(
//     {
//         first_name: 'Douglas',
//         last_name: 'Fir',
//         age: 35,
//         about: 'I like to build cabinets',
//         interests: ['forestry']
//     },
//     INDEX,
//     TYPE
// );

// getDocuments('my_store', 'products', {});

// aggsDocuments(INDEX, TYPE, {
//     all_interests: {
//         terms: { field: 'interests' }
//     }
// });

// getDocumentWithExactMatch('my_store', 'products', {
//     productId: 'XHDK-A-1293-#fJ3'
// });

// getDocuments('my_store', 'products', {
//     constant_score: {
//         filter: {
//             bool: {
//                 should: [
//                     { term: { price: 20 } },
//                     { term: { productID: 'XHDK-A-1293-#fJ3' } }
//                 ],
//                 must_not: [
//                     {
//                         term: { price: 30 }
//                     }
//                 ]
//             }
//         }
//     }
// });

const wait = ms =>
    new Promise(resolve => {
        setTimeout(() => resolve(1), ms);
    });

async function getWait(ms) {
    // wait(2000).then(res => {
    //     console.log(res);
    // });
    // console.log('here');
    const t1 = Date.now();
    const y = await wait(5000);
    const t2 = Date.now();
    console.log('yellow');
    return y;
}

const main = () => {
    // createNewMapping('my_store', {
    //     products: {
    //         properties: {
    //             productID: {
    //                 type: 'string',
    //                 index: 'not_analyzed'
    //             }
    //         }
    //     }
    // });

    getDocumentWithExactMatch('my_store', 'products', {
        productID: 'XHDK-A-1293-#fJ3'
    });
};
