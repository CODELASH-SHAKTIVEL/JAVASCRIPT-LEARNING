// Rest pattern and Parameter

let hotel = {
    names: 'Hilton',
    location:'Mumbai' , // key value pair
    categories : ["a","b","c","d"],
    MainMenu : ["Chinese" , "vada pav" , "chicken briyani"],
    openingHours :{
        sunday : {open :"9:00", close : "11:00"},
        monday : {open :"19:00", close : "11:00"},
        Tuesday : {open :"08:00", close : "11:00"},
        
    }
}

// Spread (...) operator It is present in the rhs of  =
let nums  = [2,3,4,5,6]
console.log(...nums);

// Syntax of rest (...) get element and packed them into array 
// Use of LHS 
let [a,b, ...others] = nums;
console.log( others );

// Object 
let {sunday , ...weekdays}  = hotel.openingHours;
/// weekdays will contain all other days except Sundays
console.log(sunday , weekdays);