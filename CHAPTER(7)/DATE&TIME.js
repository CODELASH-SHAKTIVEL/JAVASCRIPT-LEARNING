// DATE AND TIME 

// Date object always carry "date" and "time" 
 

// Using Date method
let currentDate = new Date(); // current date
console.log(currentDate);


// Using timeStamp (integer number represent  in this from 1-1-1970)
let currentDated = new Date (2012,11,7);
console.log(currentDated);  

// using getTime() to convert the timestamp into a readable format
// To get time in "ms" 
let currentDates = new Date().getDate(); // current Date
console.log("Current date is: ", currentDates );