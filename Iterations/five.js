//ForEach loop
const coding=["js","java","cpp","python"]
// coding.forEach(function (val){
//     console.log(val)
// })
//can be written another way
coding.forEach((item)=>{
    //console.log(item)
})

const myCoding=[
    {
        lanName:"java",
        lanFilename:".java"
    },
    {
        lanName:"javascript",
        lanFilename:".js"
    },
    {
        lanName:"HTML",
        lanFilename:".html"
    }
]
myCoding.forEach((item)=>{
    console.log(item.lanName)
})