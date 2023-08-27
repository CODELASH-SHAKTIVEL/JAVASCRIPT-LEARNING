// Object Oriented Programming 

// Prototypes
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