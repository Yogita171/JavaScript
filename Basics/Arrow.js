const user={
    username:"Yogita",
    price: 999,

    welcomeMessage:function(){
        // console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
  
}
// user.welcomeMessage()
// //if username change
// user.username=("sam")
// user.welcomeMessage()
//console.log(this) //it return an empty object

//this keyword is not work in functions
// function chai(){
//     let username="yogita"
//     console.log(this.username)
// }
// chai()

// const chai=function(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()


const chai=()=>{
    let username="hitesh"
    console.log(this)
    console.log(this.username)
}
// chai()

//Arrow function (explicit return)
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

//another way of declaring arrow function is implicit return
// const addTwo=(num1,num2)=> num1+num2

//if curly braces is used then must add return keyword
//or () is used then no need to add return
const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(8,6))

//if you want to return an object
const addThree=(num1,num2)=>({username:"yogita"})
console.log(addThree())