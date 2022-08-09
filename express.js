const express = require("express"),
    app = express(),
    port = 3000,
    routs = require("./routs.js"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/UsersDB");

routs(app);
app.listen(port);