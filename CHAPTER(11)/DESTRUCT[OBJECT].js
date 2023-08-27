// DATA STRUCTURE , STRING , OPERATORS

// DESTRUCTURING OF OBJECT 

let hotel = {
    names: 'Hilton',
    location:'Mumbai' , // key value pair
    categories : ["a","b","c","d"],
    MainMenu : ["Chinese" , "vada pav" , "chicken briyani"],
    openingHours :{
        sunday : {open :"9:00", close : "11:00"},
        monday : {open :"19:00", close : "11:00"},
        
    }
}


// let {names , location ,MainMenu} = hotel;
// console.log(names , location , MainMenu);


// // Set Customize name to Object Property
// let {names:hotelName , location:hotelLocation , MainMenu : Menu} = hotel;
// console.log(hotelName , hotelLocation , Menu );



// Destructing Nested Objects
// let {names , openingHours} = hotel;
// console.log(names ,openingHours)
let {sunday:{open , close}} = hotel.openingHours;
console.log(open, close);

