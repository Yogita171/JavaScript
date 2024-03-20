//global scope
var c=50

//local scope
if(true){
    let a=10
    const b=20
    var c=30
}

//console.log(a)
// //console.log(b)
// console.log(c)

var a=30
if(true){
    let a=10
}
// console.log(a)

//nested function

function one(){
    const username="yogita"

    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)
    //two()
}
// one()

if(true)
{
    const username="yogita"
    if(username=="yogita")
    {
        const website=" youtube"
        //console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)


// types function declaration

function addone(num){
    return num+1
}
console.log(addone(5))

const addTwo=function(num)
{
    return num+2
}
console.log(addTwo(5))


