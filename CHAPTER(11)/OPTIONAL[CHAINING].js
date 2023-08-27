// Optional Chaining (?.)


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

// IF open then at what time 
console.log(hotel.openingHours.sunday.open);

// To avoid this error tow method is there
// Without optional chaining 
 if(hotel.openingHours && hotel.openingHours.saturday ){
       console.log(hotel.openingHours.saturday.open);
}

// With optional Chaining 
console.log(hotel.openingHours.saturday?.open)

//Check previous value of the operator => null or undefined
// return undefined
// when we use ?. on a non-existing property in an object