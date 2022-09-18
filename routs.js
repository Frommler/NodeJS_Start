const users = require("./models/UserModel"),
     usercontroller = require("./controllers/UserController"),
     products = require('./models/ProductModel'),
     productsController = require('./controllers/ProductsController');

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

  app.route("/users-by-id/:userId").get(usercontroller.getUserById);

  

  app.route('/create-product').post(productsController.createProduct);

  app.route('/products-list').get(productsController.getProductsList);

  app.route('/get-product-by-id/:prodid').get(productsController.getProductById);

  app.route('/product-by-price/:lowprice/:highprice').get(productsController.getProductsByPrice);

  app.route('/get-product-by/:name').get(productsController.getProductByName);

  app.route('/add-category-for-all').put(productsController.addCategoryForAll);
};