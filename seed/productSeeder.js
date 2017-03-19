/**
 * Created by automac on 3/18/17.
 */

//connect mongoose inside this file
    var mongoose = require("mongoose");
mongoose.connect("localhost:27017/shopping");

var Product = require("../models/product");

//these are the products being added to the database
var products = [

    new Product({
    imagePath: "https://r.mprd.se/media/images/33083-Breath_of_Fire_(USA)-1458962482.jpg",
    title: "Breath of Fire Game",
    description: "Really cool game!!",
    price: 10
}),
    new Product({
        imagePath: "https://upload.wikimedia.org/wikipedia/en/2/2f/Zerg_colony_(StarCraft).png",
        title: "Star Craft",
        description: "Fun game!!",
        price: 10
    }),
    new Product({
        imagePath: "http://grabgrip.com/wp-content/uploads/2014/09/videogames1-750x712.jpg",
        title: "Star Craft",
        description: "Fun game!!",
        price: 10
    }),
    new Product({
        imagePath: "http://scene7.targetimg1.com/is/image/Target/14752919?wid=360&hei=360&qlt=80&fmt=pjpeg",
        title: "Star Craft",
        description: "Fun game!!",
        price: 10
    })
];

var done = 0;

for (var i = 0; i < products.length; i++){
    //the save command saves to mongo database
    products[i].save(function (err, result) {
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
