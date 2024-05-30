const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI);

const chai = {
    name: "ginger tea",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("no tea");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "isAvailable"));

Object.defineProperty(chai, 'price', {
    // writable: false,
    enumerable: false,
})

// console.log(Object.getOwnPropertyDescriptor(chai, "price"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
}