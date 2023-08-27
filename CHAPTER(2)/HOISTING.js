// HOISTING 
// VARIABLE "Declaration" are "hoisted" towards "top" of their scope

// function Declaration 
// test()
// function test(){
    // console.log("Hello World"); // This line will be executed first as it is a declaration
// }


// Not function expression or arrow function
// test() // not be able to executed is called hoisting  
// let test =()=>{
//     console.log("hello programmer")
// }


// IMP :: HOISTING in var is possible because it can run  first and execute it last 
// test()
// function test(){
    // console.log("Hello World"); // This line will be executed first as it is a declaration
// }
// var test;