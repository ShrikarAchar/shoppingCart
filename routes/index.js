var express = require('express');
var router = express.Router();
var cart = require("../models/cart");

var Product = require("../models/product");

/* GET home page. */
router.get('/', function(req, res, next) {
Product.find(function (err, docs) {
    var productChunks = [];
    //this variable represents the amount of rows = 3 max
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize){
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks});
});
  });


router.get("/add-to-cart/:id", function (req, res, next) {
    var productId = req.params.id;
    var newCart = new cart(req.session.newCart ? req.session.newCart : {});

    Product.findById(productId, function (err, product) {
        if (err){
            return res.redirect("/");
        }
        newCart.add(product, product.id);
        req.session.newCart = newCart;
        console.log(req.session.newCart);
        res.redirect("/")
    });
});

module.exports = router;










