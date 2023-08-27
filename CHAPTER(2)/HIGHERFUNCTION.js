// PASSING FUNCTION AS AN ARGUMENT (HIGHER ORDER FUNCTION EXAMPLE)

// EXAMPLE : METHOD 1

let upperCase  = function(str){
    return str.toUpperCase();
}

let LowerCase  = function(str){
    return str.toLowerCase();
}

let tranformer = function(str , fun){
    return fun(str);
}
console.log(tranformer("Hello" , upperCase));


// EXAMPLE: METHOD (2)
let compliment  = function(msg){
    return function(name){
        console.log(`Hi ${name},${msg}`);
    }
}
// console.log(compliment("You Are a Good Coder")("shakti")); //  also called higher order function 


// SAME UNDERSTAND THE DIFFERENT CONCEPT 
let complimented = compliment("you are a good coder");
compliment("harry");
console.log(compliment);