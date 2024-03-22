const coding=["js","java","cpp","python"]
// const value=coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// //so we can say that ForEach loop cannot return any value
// console.log(value) //undefined

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>num>4)
//another way of writting callback function
const newNums = myNums.filter((num)=>{
    //if return keyword not used it returns an empty array
    return num>4
})
//console.log(newNums)

//above operation using foreach loop
const newNum=[]
myNums.forEach((num)=>{
    if (num>4) {
        newNum.push(num)
    }
})
//console.log(newNum)
