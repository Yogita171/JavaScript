const accountId= 2154
let accountEmail = "yogita@gmail.com"
var accountPassword="25478"
accountCity="pune"

let accountState; //if variable is declared without defining then 
                  //javascript declared it as undefined

// accountId=542 //not allowed bcoz cannot assign value to const variable

/*
Prefer not to use var bcoz of issue in block scope and functional scope
*/

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])