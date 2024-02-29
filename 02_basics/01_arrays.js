const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["Homelander", "Transclusent", "Deep"]

const myArr2 = new Array(1, 2, 3, 4)

// Array methods

// myArr.push(6)
// myArr.pop()
// myArr.unshift(7)
// myArr.shift()

// console.log(myArr.includes(0));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log("a ", myArr);
const newArr = myArr.slice(1, 3)
console.log(newArr);
console.log("b ", myArr);
const newArr2 = myArr.splice(1, 3)
console.log("c ", myArr);
console.log(newArr2);