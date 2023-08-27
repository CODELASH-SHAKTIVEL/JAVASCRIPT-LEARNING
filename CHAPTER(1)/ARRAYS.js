//************ARRAYS**********// 

let dishes = ['Biryani', "Chat" , "Parathay"]

// Access 
console.log(dishes[2]);

// Modify The Array
dishes[0] = 'karahai';
// Replace the value at index position zero with karahai string
console.log(dishes);

// ****** ARRAY METHOD *****//

// JOIN METHOD 
// Console.log(dishes.join( ' ' ))


// indexOf 
// console.log(dishes.indexOf("Chat")) // case sensitive 


// concat method 
let newDishes = ['sweet-Dish' , 'Pani']
console.log(dishes.concat(newDishes));
let updateDishes = dishes.concat(newDishes);
// 'karahai' , 'chat' , 'Parathay' , 'sweet-Dish' , 'Pani' 


//Length Method
console.log(newDishes.length);


// push method 
console.log(updateDishes.push("pani-puri")); // return new length of array
console.log(updateDishes)


// Method pop
console.log(dishes.pop()) // deletion of last element 


