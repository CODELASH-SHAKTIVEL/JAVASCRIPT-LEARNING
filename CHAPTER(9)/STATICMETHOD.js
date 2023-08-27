// Object Oriented Programming 

// Static method (method which is not present on constructor)
// "prototype" property but "constructor" itself

// Class declaration 

class Car {
    constructor(color,model){
        this.color = color;
        this.model= model ;
    }
    startEngine(){
        console.log(`This is start engine method of`);
    }
}

// Static Method 
Car.breakMethod  = function(){
    console.log("This is break method of car")
}

let honda = new Car("Red" , 2022);
honda.startEngine();
Car.breakMethod();