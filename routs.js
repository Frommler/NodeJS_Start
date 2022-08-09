const users = require("./models/UserModel");
const usercontroller = require("./controllers/UserController");

module.exports = function(app){
  //app.get("/", usercontroller.ListOfUsers);
  app.route("/").get(usercontroller.ListOfUsers);

  app.get("/count-of-users", (req, res) => {
    res.send(200, users.length);
  });

  //app.get("/averege-age", usercontroller.avgage);



  app.get("/oldest-user", (req, res) => {
    let max = 0;
    users.forEach((obj) => {
      if (obj.age > max){
        max = obj.age;
      }
    });
    res.send(200, "Oldedst user " + max);
  });



  app.get("/youngest-user", (req, res) => {
    let min = 999;
    users.forEach((obj) => {
      if (obj.age < min){
        min = obj.age;
      }
    });
    res.send(200, "Youngest user " + min);
  });
};