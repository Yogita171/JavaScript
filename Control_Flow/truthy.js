//falsy values
//false, 0,-0, BigInt 0n, "",null, undefined, NaN


//truthy values-
//"0",'false'," ",[],{},function[]{}

//Nullish Coalescing Operator(??)

let val1;
// val1=5??10
// val1=null??10
// val1=undefined??15
val1=null??10??15
// console.log(val1)

//ternary operator

//syntax
//condition ? true:false

const iceTeaPrice=100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")