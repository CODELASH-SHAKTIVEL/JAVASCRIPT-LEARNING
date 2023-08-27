// Destructuring the array

let hotel = {
    name: 'Hilton',
    stars: [3,4,5,6] ,  
   categories:["Chinese" , "italian" , "English"]
}

// Simple example
// Without
let items = [2,3,4,5];
let x = items[0];
let y = items[1];
let z = items[2];
let p = items[3];
console.log(x,y,z,p);


// Destructing 
// METHOD 1:
let [a,b,c,d] = items;
console.log(a,b,c,d);


// METHOD 2:
let [first ,second , third] = hotel.categories;
console.log(first ,second , third);
let [firsts , , thirds] = hotel.categories;
console.log(first , third); // First and Third 


// METHOD 3: // IMPORTANT NOTE 
let [main , secondary] = hotel.stars;
console.log(main , secondary);
// swapp it by third variable
// Destructing variable
([secondary , main ]=[main , secondary]);
console.log(main , secondary);


// Destructing of nested Arrays
let nums = [2,3,[4,5]];
let [v , , [f,u]] = nums;
console.log(v,f,u); // Further U Can Destruct