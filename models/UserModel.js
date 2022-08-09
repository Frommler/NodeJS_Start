const mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  name: String,
  age: Number
})

module.exports = mongoose.model("Users", UserSchema);