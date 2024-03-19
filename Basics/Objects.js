//singleton

//object literals

//declaration

const mySym=Symbol("key1")

const JsUser={
    name:"Yogita",
    age:18,
    [mySym]:"newKey1",
    location:"Pune",
    email:"yogita@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//accessing
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])

//JsUser.age=22; //assigning new value 
// console.log(JsUser)

//Object.freeze(JsUser) //used to lock object
//JsUser.email=("yogita@google.com")
// console.log(JsUser)

JsUser.greetings=function(){
    //console.log("Hello Js User")
}

JsUser.greeting2=function(){
   // console.log(`Hello Js User, ${this.name}`)
}
// console.log(JsUser.greetings())
// console.log(JsUser.greeting2())


//object constructor
const tinderUser={}
tinderUser.id="156"
tinderUser.name="ABC"
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Yogita",
            lastname:"Gaikwad"
        }
    }
}
//console.log(regularUser.fullname.userfullname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

//const obj4={obj1,obj2} //its not good method of merging
//const obj4=Object.assign({},obj1,obj2,obj3) //less used method

const obj4={...obj1,...obj2,...obj3}
// console.log(obj4)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//destructuring object
const course={
    courseName:"Javascript",
    price:"5000",
    courseInstructor:"hitesh"
} //declaration
 
//accessing
console.log(course.courseInstructor)

const{courseInstructor} = course
console.log(courseInstructor)

//if wants to change keyname
const{courseInstructor:Instructor}  =  course
console.log(Instructor)





