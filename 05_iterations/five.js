// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item) => {
//     //console.log(item);
//     return item
// })
// console.log(values);

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = numbers.filter((num) => {
//     return num>4
// })

const numbers = []
const nums = [1,2,3,4,5,6,7,8,9,10]

nums.forEach((num)=>{
    if (num > 4) {
        numbers.push(num)
    }
})
console.log(numbers);