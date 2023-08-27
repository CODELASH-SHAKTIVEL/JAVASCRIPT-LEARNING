// ARRAY METHOD
// CHAIN METHOD

let num = [1,2,34,56,77];
let result = num.slice(0,3).splice(2,1,7).push(8);
// 1,2,[3],56,7[7] ,8
// push method return new length of the array 
console.log('result',result);