const mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  name: String,
  age: String
});

module.exports = mongoose.model("people", UserSchema);