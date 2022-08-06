const users = [{name:"Maxq", age:"42"},{name:"Mayx", age:"50"},{name:"Madx", age:"20"},{name:"Max", age:"20"},{name:"John", age:"32"}];

module.exports = function(app){
  app.get("/", (req, res) => {
    res.send(200, "Hello from Express!");
  });
  app.post("/", (req, res) => {
    res.send(200, "Hello from Express!");
  });

  app.get("/count-of-users", (req, res) => {
    res.send(200, users.length);
  });

  app.get("/averege-age", (req, res) => {
    let sum = 0;
    users.forEach((obj) => {
      sum += Number(obj.age);
    });
    res.send(200, (sum / users.length).toFixed(0));
  })
};