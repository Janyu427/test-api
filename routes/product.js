const express = require("express");
const router = express.Router();

const products = {
    "product": [
        {
            "key": "categoryHome",
            "title": "住家",
            "items": [
                {
                    "name": "文藝", 
                    "titleTag": "文藝",
                    "itemNumber": "1",
                    "link": "https://www.google.com",
                    "bgSrc": "https://janyu427.github.io/test/teiImages/product1.jpg"
                },
                {
                    "name": "古色古香", 
                    "titleTag": "古色古香",
                    "itemNumber": "2",
                    "link": "https://www.google.com",
                    "bgSrc":"https://janyu427.github.io/test/teiImages/product2.jpg"
                },
                {
                    "name": "南法鄉村風", 
                    "titleTag": "南法鄉村風",
                    "itemNumber": "3",
                    "link": "https://www.google.com",
                    "bgSrc": "https://janyu427.github.io/test/teiImages/product3.jpg"
                },
                {
                    "name": "工業風別墅", 
                    "titleTag": "工業風別墅",
                    "itemNumber": "4",
                    "link": "https://www.google.com",
                    "bgSrc": "https://janyu427.github.io/test/teiImages/product4.jpg"
                }
            ]
        },
        {
            "key": "categoryBusiness",
            "title": "商空",
            "items": [
                {
                    "name": "知音", 
                    "link": "https://www.google.com",
                    "itemNumber": "5",
                    "titleTag": "知音",
                    "bgSrc": "https://janyu427.github.io/test/teiImages/product5.jpg"
                },
                {
                    "name": "竹風", 
                    "titleTag": "竹風",
                    "itemNumber": "6",
                    "link": "https://www.google.com",
                    "bgSrc": "https://janyu427.github.io/test/teiImages/product6.jpg"
                },
                {
                    "name": "旭日", 
                    "titleTag": "旭日",
                    "itemNumber": "7",
                    "link": "https://www.google.com",
                    "bgSrc": "https://janyu427.github.io/test/teiImages/product7.jpg"
                },
                {
                    "name": "銀髮族", 
                    "titleTag": "銀髮族",
                    "itemNumber": "8",
                    "link": "https://www.google.com",
                    "bgSrc": "https://janyu427.github.io/test/teiImages/product8.jpg"
                }
            ]
        }
    ]
};

router.get("/", (req, res) => {
    const key = req.query.key;

    if (!key) {
        return res.json(products);
    }
    
    for (let i = 0; i < products.product.length; i ++) {
        if (products.product[i].key == key) {
            return res.json(products.product[i]);
        }
    }
});

module.exports = router;