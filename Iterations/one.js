//for loop
// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element)
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element==5)
//     {
//         console.log("5 is best number")
//     }
//     console.log(element)
// }

// for (let i = 1; i < 10; i++) {
//     console.log(`Outer loop value: ${i}`)
//     for (let j = 1; j < 10; j++) {
//        // console.log(`inner loop value: ${j} and inner loop ${i}`)
//         console.log(i+'*'+j+'='+i*j)
//     }    
// }

// let i=5
// for(let j=1;j<=10;j++){
//     console.log(i+'*'+j+'='+i*j)
// }

// let myArray=["Mango","Orange","Pineapple","Strawberry"]
// console.log(myArray.length)
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//Keywords: break, continue
// for (let index = 0; index <=20; index++) {
//     if(index==5){
//         console.log("5 is detected")
//         break;
//     }
//     console.log(`value of i is ${index}`);
// }

for (let i = 0; i <=20; i++) {
    if(i==5){
        console.log("5 is detected")
        continue;
    }
    console.log(`value of i is ${i}`);
}