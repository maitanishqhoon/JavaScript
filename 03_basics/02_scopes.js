var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
    //console.log("INNER: ",a);
}
//console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Tnix"
    
    function two() {
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);

    //two()

}

//one()

if(true){
    const username = "fake"
    if (username === "fake") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ************************** interesting ****************************
console.log(addone(68));
function addone(num) {
    return num+1
}


addtwo(67)
const addtwo = function(num) {
    return num+2
}

