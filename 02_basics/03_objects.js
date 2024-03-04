// singleton

//object literals

const mySym = Symbol("key1")
// Object.create
const jsUser = {
    name: "Tanix",
    "sur name": "R",
    [mySym]: "chaabi",
    age: 18,
    location: "Ahmedabad",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["sur name"]);
// console.log(jsUser[mySym]);

// Object.freeze(jsUser)
jsUser.email = "def@yahoo.com"

// console.log(jsUser.email);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingNew = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingNew());