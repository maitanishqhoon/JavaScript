// let myName = "tanishq     "

// console.log(myName.trim().length);

let theBoys = ['Hughie', 'Bill Butcher', 'Frenchie']

let heroPower = {
    Hughie: "Starlight",
    Butcher: "temp V",
    Frenchie: "Karen",

    getButcherPower: function(){
        console.log(`Butcher power is ${this.Butcher}`);
    }
}

Object.prototype.tanix = function() {
    console.log(`Tanix is present in all objects`);
}

Array.prototype.heyTanix = function(){
    console.log(`Tanix says hello`);
}

// heroPower.tanix()
// theBoys.tanix()
// theBoys.heyTanix()
// heroPower.heyTanix()
// inheritance
const user = {
    name: "chai",
    email: "example@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    __proto__: teachingSupport
}

teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "ChaiAurCode            "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"Tanix".trueLength()
"Nimboos".trueLength()