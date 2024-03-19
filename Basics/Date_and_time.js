//date

let myDate = new Date()
// console.log(myDate)

// console.log(myDate.toString())

// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

// let myCreatedDate = new Date(2024,10,17)
// console.log(myCreatedDate.toDateString())

let myCreatedDate = new Date(2024,10,17, 9,40)
// console.log(myCreatedDate.toLocaleString())


//Time

let myTime = Date.now()
console.log(myTime)
console.log(Math.floor(Date.now()/1000))