const express = require("express"),
    app = express(),
    port = 3000,
    routs = require("./routs.js");

routs(app);
app.listen(port);


