// ARRAY METHODS 

// METHOD 1 :  SLICE METHOD 
// USED TO EXTRACT PART THE ARRAY
// ARRAY.SLICE(STARTINDEX , LASTINDEX(EXCLUDED))
// RETURN NEW ARRAY OF EXTRACTED ELEMENT 
let num = [3,5,9,2,8];
let extractedArray = num.slice(1,3) // 1 to 2
console.log("original array = " , num);
console.log("extracted Array = " , extractedArray);


// METHOD 2: SPLICE METHOD 
// USED TO ADD NEW ELEMENT INTO THE ARRAY
// ARRAY.SPLICE (INDEX,DELETEVALUE,VALUETOBEADDED)
//RETURN DELETED ITEMS IN THE FORM OF ARRAY
let nums = [3,4,5,6,7,8];
let updated = nums.splice(0,3,0); // [4,5] deleted
console.log(updated);


// GETTING LAST ELEMENT OF THE ARRAY
// AT METHOD 
let number  =  [23,45,65,67];
console.log(number[0]);
console.log(number.at(1));

// GETTING LAST ELEMENT OF THE ARRAY
console.log(number[number.length-1]);
console.log(number.slice(-1)[0]);
console.log(number.at(-1));

// At method can also work on string 
let names = "larry"
console.log(names.at(0));