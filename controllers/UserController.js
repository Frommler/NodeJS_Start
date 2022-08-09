//const users = [{name:"Maxq", age:"42"},{name:"Mayx", age:"50"},{name:"Madx", age:"20"},{name:"Max", age:"13"},{name:"John", age:"32"}];

const mongoose = require("mongoose"),
      user = mongoose.model("Users");

/*exports.avgage = function(req, res){
    let sum = 0;
    users.forEach((obj) => {
    sum += Number(obj.age);
  });
res.send(200, (sum / users.length).toFixed(0));
};*/

exports.ListOfUsers = function(req, res) {
  user.find(function(error, users){
    console.log(error);
    console.log(users);
    res.json(users);
  });
};

