// Object Oriented Programming 
// Setters and Getters

// Getter and setter allow you to define Object Accessors(Computer properties)

// We can also use in class

// Class declaration

class Car {
    constructor(color , model){
        this.color = color; // property
        this._model= model;// private property
    }
    startEngine(){
        console.log("Car is starting");
    }
    get _startEngine(){
      console.log("This is start engine method using get")
    }
    set changeColor(color){
        console.log(this.color = color);
    }
    get _description(){
        return `color of the car is ${this.color} and model of the car is ${this.model}`
    }
    
}
let honda = new Car ("red" , 2022);
honda.startEngine()// accessing as function
honda._startEngine; // accessing as property
console.log(honda._description);
honda.changeColor = "Yellow" // set as property 
console.log(honda) // Whole class 