const { request, response } = require("express");
const { restart } = require("nodemon");

var mongoose = require("mongoose"),
  products = mongoose.model("products");

exports.createProduct = function (req, res) {
  var newProduct = new products(req.body); //конструктор класа Products
  newProduct.save(function (err, product) {
    res.json(product);
  });
};

exports.getProductsList = function (req, res) {
  products.find({}, function (err, product) {
    res.json(product);
  });
};

exports.getProductById = function (req, res) {
  products.find(
    {
      _id: req.params.prodid,
    },
    function (err, product) {
      res.json(product);
    }
  );
};

exports.getProductsByPrice = function (req, res) {
  products.find(
    {
      price: { $gt: req.params.lowprice, $lt: req.params.highprice },
    },
    function (err, data) {
      res.json(data);
    }
  );
};

exports.getProductByName = function (req, res) {
  products.find(
    {
      name: { $regex: req.params.name, $options: "i" },
    },
    function (err, data) {
      if (err) {
        res.message(err);
      }
      res.json(data);
    }
  );
};
