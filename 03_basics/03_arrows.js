const user = {
    username: "T",
    price: 69,
    welcomeMsg: function(params) {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}
// user.welcomeMsg()
// user.username = "D"
// user.welcomeMsg()
// "this" is used to access variables with the current context

// console.log(this);

// function tea(params) {
//     let teaname = "Wagh Bakri"
//     console.log(this.teaname);  // "this" works with objects
// }
// tea()

// const tea = function(params) {
//     let teaname = "Wagh Bakri"
//     console.log(this.teaname);  // "this" works with objects
// }
const tea = () => {
    let teaname = "Wagh Bakri"
    console.log(this);  // "this" works with objects
}

// tea()

// const addtwo = (n1, n2) => {
//     return n1+n2
// }
//const addtwo = (n1, n2) => n1+n2
// const addtwo = (n1, n2) => (n1+n2)
const addtwo = (n1, n2) => ({username: "T"})

console.log(addtwo(67, 2));