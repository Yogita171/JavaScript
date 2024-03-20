//Immediately Invoked Function Expresion

(function chai(){
    //named IIFE
    console.log(`DB connected`)
})();

// (function aurcode(){
//     console.log(`DB connected two`)
// })()
//you can write above function in another way like

(()=>{
    console.log(`DB connected two`)
})();

//if you want to pass an argument then 
((name)=>{
    console.log(`DB connected two ${name}`)
})('Yogita')