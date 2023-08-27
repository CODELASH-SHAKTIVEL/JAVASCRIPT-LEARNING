// MAPS 

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

// Adding Values into the map 
 let restaurantMap = new Map();
 
 // ADDING Values into the Map
 restaurantMap.set('name' , 'BomBay Hotel')
 restaurantMap.set(  1 , 'Address2')
 restaurantMap.set(  2 , 'Address1').set(true , "we are open today").set(false , "we are not open today")

 // Getting the Values 
 console.log(restaurantMap.get(2));

 // Size of map
 console.log("Size is ", restaurantMap.size);
