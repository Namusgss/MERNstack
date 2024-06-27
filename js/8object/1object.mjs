/*
array store collection of value
where as
object store collection of value with information
 */
let info = {
  name: "suman", //here name is key, "suman" is value and whole name:"suman" is properties
  age: 23,
  ismarried: false,
};
console.log(info);
console.log(info.name);
console.log(info.age);
console.log(info.ismarried);

info.age = 50;
console.log(info);

console.log(`my name is ${info.name}. i am ${info.age} years old `);
