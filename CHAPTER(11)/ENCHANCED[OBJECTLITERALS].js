// ENCHANCED OBJECT LITERALS
// Before ES6 vs After ES6
// We can use computed property name 

openingHours = {
    sunday : {open :"9:00", close : "11:00"},
    monday : {open :"19:00", close : "11:00"},
    Tuesday : {open :"08:00", close : "11:00"},
    
}
let menuType = "platium";
let hotel = {
    names: 'Hilton',
    location:'Mumbai' , // key value pair
    categories : ["a","b","c","d"],
    MainMenu : ["Chinese" , "vada pav" , "chicken briyani"],
   openingHours, 
   order(){

   },
   [menuType]:["Different Food items... "] //will initalise menutype = platium
}

console.log(hotel);

