// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     //console.log(element);   
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`inner loop value: ${j} and inner loop value: ${i}`);
//     }
// }

// let heros = ["Homelander", "Transclusent", "Deep", "A-train"]
// for (let index = 0; index < heros.length; index++) {
//     const element = heros[index];
//     console.log(element);
// }

for (let index = 0; index < 10; index++) {
    if (index == 8) {
        console.log(`8 detected`);
        continue;
    }
    console.log(`Value of index is ${index}`); 
}