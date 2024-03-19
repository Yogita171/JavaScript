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
console.log(a)