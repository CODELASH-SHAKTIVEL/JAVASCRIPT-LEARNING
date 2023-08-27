 //  Object Oriented Programming 

 // Constructor function and the "new" Operator

 // We can not use "arrow" function as constructor

 // Call "constructor" function using "new" Keyword 


 // 1] new {object} created empty initially 
 // 2] "this" = {object}
 // 3] object linked to prototype
 // 4] function automatically return {object}  

 let Car = function(color , model) {
    // instance properties 
    this.color   = color;
    this.model   = model ;
    // not a good pratice 
    this.login = function(){
        console.log("Login");
    }
 }
 let instanceofCar = new Car("Yellow" , 2021);
 let instance = new Car("blue" , 2021);
 console.log(instanceofCar, instance);