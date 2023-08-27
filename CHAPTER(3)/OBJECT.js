//  INTRODUCTION TO OBJECT IN JAVASCRIPT 


let car = {
    color:"black",
    model:"s-class",
    company:"AUDI" 
}


// Accessing the javascript Object properties
console.log(car["color"]);
console.log(car.model);
console.log(car.company);
let propertiesName = "color";
console.log(car[propertiesName]); // we give perfect answer
console.log(car.propertiesName); // use direct property name


// Modify the Object
// OverWriting the Object
car["color"] = "brown";
car.model= 2024;
console.log(car.model);
console.log(car.color);


// DELETION IN OBJECT 
let obj = {
    prop1 : "value1",
    prop2 : "value1",
}
let returnValue = delete obj["prop1"];
let returnValue1 = delete obj.prop2;
console.log(obj.prop1,returnValue) 
console.log(obj.prop2,returnValue1) 