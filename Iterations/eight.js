const myNums=[1,2,3,4]
// const myTotal=myNums.reduce(function(acc,curval){
//     console.log(`acc:${acc} and curval:${curval}`)
//     return acc + curval
// },0)

//using arrow function
const myTotal=myNums.reduce((acc,curval)=>{
    return acc+curval
},0)
//console.log(myTotal)

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"cpp course",
        price:1999
    },
    {
        itemName:"java course",
        price:3999
    },
    {
        itemName:"python course",
        price:2499
    },
]
const totalToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalToPay)