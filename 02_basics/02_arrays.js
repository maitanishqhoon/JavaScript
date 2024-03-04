const the_boys = ["Homelander", "Deep", "A-train"]
const dc_heros = ["Batman", "Flash", "Green Lantern"]

// the_boys.push(dc_heros)

// console.log(the_boys);
// console.log(the_boys[3][2]);

// const multiverse = the_boys.concat(dc_heros)

// console.log(multiverse);

// push and concat makes the passed array as an element of the original array

//concat value when assigned to a new variable, combines the two arrays on which the operation is being performed

const all_heros = [...the_boys, ...dc_heros] // spread operator

// console.log(all_heros);

const newArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

let realArr = newArr.flat(Infinity)

// console.log(realArr);

console.log(Array.isArray("Tanix"));
console.log(Array.from("Tanix"));
console.log(Array.from({name: "Tanix"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
