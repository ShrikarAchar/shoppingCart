var express = require('express');
var router = express.Router();
var Product = require("../models/product");

/* GET home page. */
router.get('/', function(req, res, next) {
//this produces the same data as when used in mongo shell
    //this function is designed to either get a error or the docs

Product.find(function (err, docs) {
    var productChunks = [];
    //this variable represents the amount of rows = 3 max
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize){
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart',products: productChunks });
});
  });

module.exports = router;

