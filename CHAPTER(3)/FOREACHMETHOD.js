// EACH METHOD OF ARRAY

// IT ANOTHER TYPE OF LOOP WHICH WE USED TO TRANSVERSE
//OVER THE ARRAY
// [] -> for array
// {} -> for object

//  METHOD 1 : Loop for Array
let dishes = ['briyani' , 'pani-puri' , 'rice' ];
for (let i = 0; i < dishes.length; i++) {
    console.log(dishes[i]) ;
}

console.log('*********');

// METHOD 2 : USING FOR FOREACH METHOD 
// FUNCTION PROGRAMMING     
dishes.forEach(function(element){
    console.log(element); // element as a variable will print all the element 
})