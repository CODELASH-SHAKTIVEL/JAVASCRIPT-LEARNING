//********** FUNCTIONS ***********//  

// IT IS SIMPLY A PIECE OF CODE WHICH WE CAN USE IN OUR 
// PROGRAM MANY TIMES 
 // IT IS JUST LIKE A VARIABLE HOLDING SOME PIECE OF CODE 


 // DECLARATION 
 function nameOfFunction(name){
    console.log(`Hello World! ${name}`);
 }
 nameOfFunction("harry");


 // METHOD 2 :
 let invitiation = function(Names, time)
 { 
    console.log(`hello! ${Names} YOU ARE INVITED TO ARE PARTY`);
 }

 invitiation("Shakti" , "at night");


 // REAL METHOD 
 // returning Values (how to return value from the function)
 let ageCalculation = function(birthyear , currentYear){
    let age = currentYear - birthyear;
    return age;
    // console.log(age);
 }

 let functionResult= ageCalculation(2004,2023);
 console.log(`you age is ${functionResult}`)
