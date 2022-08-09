const mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  name: String,
  age: String
}, { collection: 'people' });

module.exports = mongoose.model("people", UserSchema);