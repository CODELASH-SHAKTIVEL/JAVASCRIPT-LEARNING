// FUNCTION VS METHODS 

// FUNCTION 
// let ageCalculation = function(birthyear , currentYear){
//     let age = currentYear - birthyear;
//     return age;
//     // console.log(age);
//  }
//  let functionResult= ageCalculation(2004,2023);
//  console.log(`you age is ${functionResult}`);


 // METHOD 
 // IT  IS NOTHING BUT OBJECT PROPERTIES (KEY) HOLDING FUNCTION AS "VALUE"
 let person = {
    ageCalculation:function(birthyear =2004){
        let age  = 2023 - birthyear;
        return age;
    }
 }
 console.log(`current age is ${person.ageCalculation(2003)}`);