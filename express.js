const express = require("express"),
  app = express(),
  port = 3000,
  routs = require("./routs.js"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  swagger_ui = require("swagger-ui-express"),
  swagger_doc = require("swagger-jsdoc");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/UsersDB");

var options = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "users api",
      description: "basic information about users",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "127.0.0.1",
      },
    ],
  },
  apis: ["./controllers/*.js"],
};

const sw_doc = swagger_doc(options);

app.use("/api-docs", swagger_ui.serve, swagger_ui.setup(sw_doc));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  //CORS дозвіл для запитів клієнта
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

routs(app);
app.listen(port);
