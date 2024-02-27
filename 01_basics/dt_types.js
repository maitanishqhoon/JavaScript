// 1. Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, Bigint

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1234567890n
const outTemp = null

// 2. Reference/Non-Primitive

// arrays, objects, functions

const friends = ["Karan", "Pratham", "Disha"]
let myObj = {
    name: "Tanishq",
    age: 18
}

const myFunction = function(){
    console.log("Yaoza!");
}

// console.log(typeof bigNumber); // returns big int
// console.log(typeof myFunction); // returns functions
// console.log(typeof myObj);  // returns object
// console.log(typeof outTemp); // returns object
// console.log(typeof id); // returns symbol
// console.log(typeof friends); // returns object

// Stack (Primitive), Heap (Non-Primitive)
let myYTname = "Cyrus"
let confirmName = myYTname
confirmName = "Tanishq"
// console.log(myYTname);
// console.log(confirmName);

// In Primitive, a copy of variable value is created, which when changed, doesn't affect the original value
let user = {
    email: "abc@gmail.com",
    upi: "abc@okaxis"
}
let user2 = user

//Here, Original data is assigned to user2

user2.email = "def@yahoo.com"
console.log(user.email);
console.log(user2.email);

// Any changes made using user2 will affect the original data in user

// Stack gives copy, Heap gives Reference