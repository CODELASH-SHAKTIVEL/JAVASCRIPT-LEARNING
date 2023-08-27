// Working with Array (simple Method) 

// Sorting array using sort Method 
// by default sort method is used to sort strring 
// It first convert everything into string and then ..

let letter = ["d","e","f" ,"a","b"];
console.log(letter.sort());


let nums = [1,-23,-45,67,8,9];
console.log(nums.sort()); // IT CAN MESS SOMETIME


// if a-b < 0 => a<b => A,B (keep order same)
// if a-b > 0 => a>b => B,A (switch the order)
 nums.sort((a,b)=>{
   if (a<b){
    return -1; // keep the original order
   }else{
    return 1;// switch the order
   }
})
console.log(nums);