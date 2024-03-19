let animal = "Octopus";
console.log(animal[0]);
// an index out of range will give undefined in js
console.log(animal[99]);

console.log(animal.length);

let animal2 = "fish";

console.log(animal + animal2);

let name = 1 + "haideer";
console.log(typeof name);

// Strings methods
const var1 = "hello";
console.log(var1.toUpperCase()); // to convert a string into uppercase letters

let angryMsg = "i am angry";
console.log(angryMsg.toUpperCase());
console.log(angryMsg);

// trim
let str = "          hello my name is haider.       ";
result = str.trim();
console.log(result);

//lower case
let myname = "HAIDER MANZOOR";
RESULT = myname.toLowerCase();
console.log(RESULT);

// charAt gives character at given position
let word = "milano";
console.log(word.charAt(3));

// substring
let string = "mynameishaidermanzoor"
console.log(string.substring(5,8))

// string methods with arguments
let string_n = "mynameishaidermanzoor"
console.log(string_n.indexOf("haider"))   // returns the first index of the match

console.log(string_n.indexOf("@"))

console.log(string_n.slice(5))

console.log(string_n.replace("haider","areeb"))

let str11 = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);