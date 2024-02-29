let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());
// console.log(typeof myDate); // returns object

 let ownDate = new Date("2024-02-06")
// console.log(ownDate.toLocaleString());

let myTime = Date.now()
// console.log(myTime);

// console.log(ownDate.getTime());
console.log(Math.floor(Date.now()/1000));
console.log(myDate.getDay());
ownDate.toLocaleString('default', {
    weekday: "long"
})