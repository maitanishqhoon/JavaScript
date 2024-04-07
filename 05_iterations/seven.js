const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, curval){
//     console.log(`accumulator: ${acc}\nCurrent Value: ${curval}\n`);
//     return acc+curval
// },0)

const myTotal = myNums.reduce((acc, curval) => acc+curval, 0)

const shopCart = [
    {
        itemName: 'JScourse',
        price: 299
    },
    {
        itemName: 'PYcourse',
        price: 199
    },
    {
        itemName: 'mobile dev course',
        price: 699
    },
    {
        itemName: 'Data Sci Course',
        price: 11999
    }
]

const shopTotal = shopCart.reduce((acc,item) => acc + (item.price),0)

console.log(shopTotal);

// console.log(myTotal);