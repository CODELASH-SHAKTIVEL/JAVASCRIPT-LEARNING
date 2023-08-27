// SETS => DATA STRUCTURE


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

// Example

let items = new Set([1,2,3,4,5,6,7])
console.log("old: " , items);
console.log(items.size);
console.log(items.has(2)); // check whether the number is there or not 
items.add(8);
items.delete(7);
console.log( " original : " , items);

// Set are also iterables 
for (const item of items){
    console.log(`item ${item}`);
}