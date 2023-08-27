// Common String Method 

// Trim method 
let hobbies = ' coding reading running ';
let result = hobbies.trim()
console.log(hobbies);
console.log(result);


// indexOf [Case sensetive]
console.log(result.lastIndexOf("running"))


// includes method 
console.log(result.includes("reading")) // ture or false


// Slice Method
let fullName = "wowprogrammer"
let results = fullName.slice(0, 3)// 0-2 excluding last one 
console.log(fullName.slice(0, 4))// 0-3 excluding last name 
console.log(result.slice(0, 4))// 0-3 excluding last name 


// Imp Note : does not mutate original array 
console.log("original string =", hobbies)
console.log("original string =", fullName)


// strings "split" method 
let favorite = "Brown Blue Black Gray";
//convert string to array
let arrColor = favorite.split(' '); // if , is there then ,  will be the sperator
console.log(arrColor)
// [brown , Blue , Black , Gray]


// Javascript string are Immutable 
let str = "hello";
str = str + "programmer";
console.log(str)
// because str the string are stored in  different storage memory