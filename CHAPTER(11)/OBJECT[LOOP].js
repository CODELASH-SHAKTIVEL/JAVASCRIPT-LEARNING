// LOOPING OVER OBJECT 


openingHours = {
    sunday : {open :"9:00", close : "11:00"},
    monday : {open :"19:00", close : "11:00"},
    Tuesday : {open :"08:00", close : "11:00"},
    
}
let hotel = {
    names: 'Hilton',
    location:'Mumbai' , // key value pair
    categories : ["a","b","c","d"],
    MainMenu : ["Chinese" , "vada pav" , "chicken briyani"],
   openingHours, 
}

// Keys[properties]
let properties = Object.keys(openingHours);
console.log(properties);
// we know how to loop over array
for(let key of properties) console.log(key);


// Values 
let value = Object.values(openingHours);
console.log("Values of the object are ",value) ;


// Complete Object 
let entries = Object.entries(openingHours);
console.log(entries); // Array of array

for(let [day , {open ,close}] of entries){
    console.log(`on ${day} we open at ${open} and close at ${close}`);
}