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

routs(app);
app.listen(port);