// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("1");
//   }, 4000);
// });

// promise.then(
//   (result) => {
//     console.log(result);
//     console.log("2");
//     console.log("3");
//   },
//   (error) => {
//     console.log(error);
//   }
// );
// //reading file with callback!

// const fs = require("fs"),
//   fsPromise = require("fs").promises;

// /*
// fs.readFile("file.txt", {encoding:'UTF-8'}, (err, data) => {
//   if(err){
//     console.log('Не можу прочитати файл!' + err);
//   }
//   else {
//     console.log(data);
//   }
// });
// */
// const getFile = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, { encoding: "UTF-8" }, (err, data) => {
//       resolve(data);
//     });
//   });
// };

// getFile("file copy.txt").then((data) => {
//   console.log(data);
// });

// fsPromise.readFile("file.txt", { encoding: "UTF-8" }).then((data) => {
//   console.log(data);
// });

// /*function Job(state) {
//   return new Promise(function (resolve, reject) {
//     console.log(state);
//     if (state) {
//       resolve(1);
//     }
//     else {
//       reject(2);
//     }
//   });
// }

// Job()
//   .then(
//     (res) => console.log(res),
//     (rej) => console.log(rej)
//   )
//   .then(() => console.log("we are here"))
//   .catch((error) => console.log(error));
// */

// fsPromise
//   .writeFile("file.txt", "put TEXT in the FIle", { encoding: "UTF-8" })
//   .then(() => {
//     console.log("Writing is succeful");
//   });

// fsPromise
//   .appendFile("file2.txt", "fghjkljhgfgfhjk", { encoding: "UTF-8" })
//   .then(() => {
//     console.log("Writing is succeful2");
//   });

// const { response, application } = require("express");
// const fetch = require("node-fetch");

// fetch("https://russianwarship.rip/api/v1/statistics/latest", {
//   method: "GET",
//   headers: { "Content-Type": "application/json" },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("killed enemy " + data.data.stats.personnel_units);

//     console.log(undefined == null);
//     if (5 > 1){
//       console.log("Hi");
//     }
//     else {
//       console.log("Bye");
//     }

//     (5 < 1) ? console.log("Hi") : console.log("Bye");

//     console.log(Boolean(''));
//     console.log(Number(''));

//     var Users = {name:"Mark", age:"32", name2:"Alex", age2:"65"};
//     /*Users.forEach(function(item, i, arr){
//       console.log(item, i, arr);
//     })*/

//     for(var key in Users) {
//       console.log(key + " " + Users[key]);
//     };
//   });

var Users = [
  { name: "Mark", age: "32" },
  { name: "Alex", age: "65" },
  { name: "Alsafasf", age: "62" },
  { name: "Tghfgg", age: "15" },
];

var Fruits = ["Peach", "Apple", "Pear", "Peach"];
console.log(Fruits.indexOf("Peach"));

var User = Users.find((item) => item.age > 60);
console.log(User);

var UsersUnder60 = Users.filter((item) => item.age < 60);
console.log(UsersUnder60);

//MAP - дозволяє викликати функцію для кожного елементу масиву і повертає результат виконання у вигляді НОВОГО МАСИВУ!!!!
var arrMap = Users.map((item) => item.name + "!");
console.log(arrMap);
console.log(Users);

//PUSH - додає елемент в масив,
Fruits.push("Melon"); //PUSH не повертає, тільки змінює масив
console.log(Fruits);

// POP - повертає останній елемент масиву
console.log(Fruits.pop());

//forEach - обробляє елементи В МАСИВІ!!!!
var newArr = [];
Users.forEach(function (item) {
  newArr.push(item.name + "!");
});

console.log(newArr);