//const users = [{name:"Maxq", age:"42"},{name:"Mayx", age:"50"},{name:"Madx", age:"20"},{name:"Max", age:"13"},{name:"John", age:"32"}];

const mongoose = require("mongoose"),
      user = mongoose.model("people");

/*exports.avgage = function(req, res){
    let sum = 0;
    users.forEach((obj) => {
    sum += Number(obj.age);
  });
res.send(200, (sum / users.length).toFixed(0));
};*/

exports.ListOfUsers = function(req, res) {
  user.find({
      name:{$regex:/^max/i}
    },function(error, users){
      console.log(error);
      console.log(users);
      res.json(users);
  })
  .sort({"age":-1})
  .limit(2);
};

exports.countOfUsers = function(req, res) {
  user.countDocuments({},function(error, count){
    if(error) res.json(error)
    res.json(count);
  });
};

exports.usersByAge = function(req, res) {
  user.find({
    age:{$gt:req.params.agefrom, $lt:req.params.ageto}
  }, function (error, users){
    res.json(200, users);
  });
};

exports.usersByName = function(req, res) {
  user.find({
    name:{$regex:req.params.username}
  }, function (error, users){
    res.json(200, users);
  })
  .sort("name");
};

exports.youngestUser = function(req, res) {
  user.find({}, function (error, users){
    res.json(200, users)
  })
  .sort("age")
  .limit(1)
};

