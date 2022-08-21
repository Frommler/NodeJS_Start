const users = require("./models/UserModel");
const usercontroller = require("./controllers/UserController");

module.exports = function(app){
  //app.get("/", usercontroller.ListOfUsers);
  app.route("/").get(usercontroller.ListOfUsers);

  app.route("/count-of-users").get(usercontroller.countOfUsers);

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

  app.route("/users-by-age/:agefrom/:ageto").get(usercontroller.usersByAge);

  app.route("/users-by-name/:username").get(usercontroller.usersByName);

  app.route("/youngestuser").get(usercontroller.youngestUser);

  app.route("/users-by-height/:h").get(usercontroller.usersByHeight);

  app.route("/create-user").post(usercontroller.createUser);

  app.route("/delete-user/:userId").delete(usercontroller.deleteUser);

  app.route("/update-user/:userId").put(usercontroller.updateUser);

  app.route("/update-user-height").put(usercontroller.updateUserHeight);
};