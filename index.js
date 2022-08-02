/*const http = require("http");

const hostName = "127.0.0.1";
const port = 3000;

let server = http.createServer(
  (request, response) => {
    response.setHeader('Content-Type','text/html');
    response.statusCode = 200;
    response.end("Hello, world!");
  }
);
server.listen(port, hostName, () => {
  console.log("Server started");
});*/

const http = require("http");

const hostName = "127.0.0.1";
const port = 3000;

const users = [{name:"Max", age:"20"},{name:"John", age:"32"}];

let server = http.createServer(
  (request, response) => {
    if(request.url == "/users"){
      response.setHeader('Content-Type','text/json');
      response.statusCode = 200;
      response.end(JSON.stringify(users));
    }
    else {
      let str = "";
      response.setHeader('Content-Type','text/html');
      users.forEach(function(user){
        str += "Hello, " + user.name;
        str += "<br>";
      })
      response.end(str);
    }
  }
);
server.listen(port, hostName, () => {
  console.log("Server started");
});