// HOW to store complex data structure likw
// Array of object 
// Ultimately in local storage data store in string formate 

let vehicle = [{
company : "honda" ,
model : "2009"
},
{
    company : "ford",
    model: "2023"
}
]

console.log(vehicle);
let stringOfVehicle = JSON.stringify(vehicle); // convert to string
console.log(typeof stringOfVehicle);
localStorage.setItem("vehicles" , stringOfVehicle);


// Get stored item again in object formate 
let storedData = localStorage.getItem("vehicle");
let objectFormate = JSON.parse(storedData);
console.log(typeof objectFormate);

// IMP : TO GET ANY COMPLEX DATA FROM BROWER USE JSON 