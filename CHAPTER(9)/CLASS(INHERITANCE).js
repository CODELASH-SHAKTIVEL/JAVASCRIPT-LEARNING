// Class Declaration 

// INHERITANCES 

// Parent Class 
class Car {
    constructor(color , model){
        this.color = color;
        this.model = model;
    }
    startEngine(){
        console.log("This is start engine method")
    }
}

// Child class
class Bike extends Car {
    // Add some new properties and method as well 
    constructor(color , model , Enginemodel){
        super (color, model); // calls the parent class 
        this.Enginemodel=Enginemodel ;
    }
    bikeMethod(){
        console.log("This is Method of Bike Class")
    }
}

let newbike  = new Bike("Black" , 2023 , "123CC");
let bike2 = new Bike ("Yellow" , 2028 , "122CC" );
console.log(newbike , bike2);

let honda = new Car ("Red" , 2022);
console.log(honda);