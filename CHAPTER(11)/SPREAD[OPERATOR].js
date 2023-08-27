// Spread Operator (Unpacking of array elements)

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

let nums = [2,4,5,6,7];
console.log(...nums);


// USECASE IN OBJECT
let newArray = [9,8,...nums];
console.log(newArray);

let UpDatingMainMenu = [...hotel.MainMenu , "food " , "chinese"];
console.log(UpDatingMainMenu);

// Join 2 Arrays
let joinArray = [...nums , ...newArray];
console.log(joinArray);

// Create Shallow copy using Spread operator
let CopyArray = [...UpDatingMainMenu];
CopyArray[1] = "updated the food ";
console.log(UpDatingMainMenu , " " , CopyArray); 

// We can also use spread operator on strings 
let passion = "programming" ;
console.log(...passion);

