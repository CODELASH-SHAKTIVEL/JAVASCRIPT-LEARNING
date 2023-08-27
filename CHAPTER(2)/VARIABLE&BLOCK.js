// Variable and Block Scope 

// scope >>- Area where variables is defined or accessible

// const score  = 90; // global Scope 

if(true){  // var dont use because it doesnt work properly in block code
    let score = 50;
    console.log("score inside if block:", score);
}

console.log(score); // cannot access the  block variable output  


// ******** TERNARY OPERTOR ***********// 
let result  = age >18 ? "quality" : "ageissue ";

// Switch Case you know already