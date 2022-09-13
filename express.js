const express = require("express"),
    app = express(),
    port = 3000,
    routs = require("./routs.js"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/UsersDB");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) { //CORS дозвіл для запитів клієнта
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
    });

routs(app);
app.listen(port);