// Object Oriented Programming 

// PROTOTYPES INHERITANCES 
// Each object created by "constructor" function have an access 
// to all "method" present inside that "constructor" prototype 


let Car = function(color , model) {
    // instance properties 
    this.color   = color;
    this.model   = model ;
 }

// Method 
  Car.prototype.startEngine = function(){
    console.log("This is start engine method");
  }

// We can also set "properties" to prototype
  Car.prototype.company = "Honda"

console.log(Car.prototype)
let instanceofCar = new Car("Yellow" , 2021);
let instance = new Car("blue" , 2021);
console.log(Car.prototype.startEngine());
instanceofCar.startEngine();


// Checking the instance of the object 
console.log(instance.__proto__);
console.log(instance.__proto__.isPrototypeOf(instance));
console.log(Car.__proto__.isPrototypeOf(Car));

// PROTOTYPE IS THE INBULIT IN JAVASCRIPT
// AND WE CAN NOT CHANGE IT .
let arr = [2,34,5,6,7]; // [] is same as new array ([])
console.log(arr.__proto__.Array.prototype); // Run in brower 

// Chaining of prototype 
console.log(arr.__proto__.__proto__); //Chaining
console.log(Object.prototype);