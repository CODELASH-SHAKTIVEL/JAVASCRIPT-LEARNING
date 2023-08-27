// Object Oriented Programming 

// ES6 Classes(They still implement Prototypal inheritance behind the scene)

// Class Declaration 

class Car {
    constructor(color,model){
        this.color = color;
        this.model= model ;
    }
    startEngine(){
        console.log(`This is start engine method of`);
    }
}

let honda = new Car("red" , 2022);
console.log(honda.__proto__);
console.log(honda);
honda.startEngine();
// __proto__ property will give you access to prototype object which contains all methods and properties of a


// Important points 
// Classes are not hoisted
// Classes are not first class Citizens (pass as an arugument or return)
// Classes are executed in strict mode