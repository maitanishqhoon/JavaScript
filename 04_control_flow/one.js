// if

const temp = 33

// if(temp>40) console.log(`success`); another notation, implicit scope

if (temp < 30) {
    console.log("less than 30");
} else if (temp < 35) {
    console.log("less than 35");
} else{
    console.log(`temperature is ${temp}`);
}