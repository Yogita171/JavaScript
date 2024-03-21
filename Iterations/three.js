//for of loop

const arr=[1,2,3,4,5]
for (const num of arr) {
    //console.log(num)
}

const greetings="Hello world!"
for (const greet of greetings) {
    if(greet==" "){
        continue
    }
    //console.log(greet)
}

//Maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"United state of America")
map.set('Fr',"France")
//console.log(map)
//forof loop on above map
for (const [key,value] of map) {
    console.log(key,":",value)
}


//object iteration using forof loop
const myObject={
    'game1':"NFS",
    'game2':"spiderman"
}
// for(const [key,value] of myObject){
//     console.log(key,value)
// }

//objects are not iterable using forof loop