//functio defination

function myName(){
    console.log("Y")
    console.log("O")
    console.log("G")
    console.log("I")
    console.log("T")
    console.log("A")
}

//accessing 
// myName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}

// addTwoNumbers()
// addTwoNumbers(5,6)
// addTwoNumbers("a",6)
// addTwoNumbers(2,null)
//addTwoNumbers(2,undefined)

function addTwoNumbers(number1, number2){
    // let result=number1+number2
    // return result
    return number1+number2
}
const result=addTwoNumbers(8,6)
// console.log("Result:", result)

function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("Yogita"))
// console.log(loginUserMessage())

function loginUserMessage(username="sam"){
    if(username===undefined) //(!username) can be used
    {
        console.log("please enter a name")
        return
    }
    return `${username} just logged in`
    
}
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500))

//how object is passed to function and handled
const user={
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
// handleObject({
//     username:"sam",
//     price:"399"
// })

//how array is passed to function and handled
const myNewArray=[200,400,600,800]
function returnValue(getArray){
    return getArray[2]
}
// console.log(returnValue(myNewArray))

function returnValue(getArray){
    return getArray[2]
}
console.log(returnValue([100,300,500,700,900]))
