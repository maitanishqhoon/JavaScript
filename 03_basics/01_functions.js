function sayMyName(){
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("X");
}

// sayMyName()

// function addTwoNos(n1, n2){
//     console.log(n1+n2);
// }

function addTwoNos(n1, n2){
    let result = n1+n2
    return result
}

const total = addTwoNos(2, 26)

// console.log("total: ", total);

function loginUserMsg(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("Tanix"));
// console.log(loginUserMsg());

function calcCartPrice(...n1){
    return n1
}

// console.log(calcCartPrice(200,300,500));

const user = {
    username: "T",
    price: 69
}
function handleObject(anyObj) {
    console.log(`username is ${anyObj.username} price is ${anyObj.price}`);
}

handleObject(user)

const newArr = [100, 200, 222, 6000]

function returnSecondValue(getarray) {
    return getarray[3]
}

console.log(returnSecondValue(newArr));