const email = "abc@gmail.com"

if (email) {
    console.log("got the email");
} else{
    console.log("didn't get the email");
}

// falsy values - false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values - true, "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// Terniary operator

const price = 100
price >= 80 ? console.log("greater than 80") : console.log("less than 80");