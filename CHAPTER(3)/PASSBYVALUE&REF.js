// PASS BY VALUE & PASS BY REFERENCES

let arr = [1,2,3,4,5];
let getref = arr;
getref[5] =6;
getref.shift();
console.log("original array",arr);// modifying  getref also original array
console.log("references array",getref);

console.log("**********");

// PASS BY VALUE
let getValue = [...arr] // spread operator
getValue[5]=8;
getValue.shift(); // [0] is shifted or deleted
console.log("original array",arr);
console.log("references array",getValue);