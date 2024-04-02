// for of loop

// const arr = [1,2,3,4,45]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hola Amigo!"
// for (const greet of greetings) {
//     console.log(greet);
// }

// Map

const map = new Map();
map.set("IND", "INDIA")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("RUS", "RUSSIA")

// map only accepts unique values

// console.log(map); 

for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}

const myObj = {
    'game1' : 'Far cry',
    'game2' : 'NFS'
}
// for of loop wont work on created objects

