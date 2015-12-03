var express = require("express");
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
// var mongojs = require("mongojs");
// var db = mongojs("ecommerce", ["products"]);
var app = express();
var Product = require("./models/productModel")

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.listen(9099, function(){
	console.log("runRunRUnRUN")
});

mongoose.connect("mongodb://localhost/ecommerce", function(error){
	if(error){
		console.log(error);
	}
});

app.get("/api/products", function(req, res){
	Product.find().sort({name: 1}).exec().then(function(results){
		res.status(200).send(results);
	});
});

app.get("/api/products/:id", function(req, res){
	Product.findOne({_id: req.params.id}).exec().then(function(results){
		res.status(200).send(results);
	});
});

app.post("/api/products", function(req, res){
	var product = new Product(req.body);
	product.save().then(function(err, result){
		return res.status(201).end();
	});
});

app.put("/api/products/:id", function(req, res){
	Product.update({_id: req.params.id}, req.body).then(function(err, results){
		console.log(results);
		res.status(200).end();
	});
});

app.delete("/api/products/:id", function(req, res){
	Product.remove({_id: req.params.id}).then(function(results){
		res.status(200).end();
	});
});







