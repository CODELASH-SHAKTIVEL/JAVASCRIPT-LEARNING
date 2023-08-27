// Short Circulating (&& || )

let hotel = {
    names: 'Hilton',
    location:'Mumbai' , // key value pair
    categories : ["a","b","c","d"],
    MainMenu : ["Chinese" , "vada pav" , "chicken briyani"],
    openingHours :{
        sunday : {open :"9:00", close : "11:00"},
        monday : {open :"19:00", close : "11:00"},
        Tuesday : {open :"08:00", close : "11:00"},
        
    }
}

// FALSE VALUES => 0 , FALSE , NULL , UNDEFINED , ""{EMPTY STRING}
// AND (&&) OPERATOR (OUTPUT TRUE IF ALL INPUT TRUE)
let result = "programmer" && "coder" && 0 ; // Not move towards next step if false is there 
console.log(result) // original form


// OR [||] opertor (output true if any given input true)
let results = "" || null;
console.log(result);
// As || operator find first output true . It simply return that true value and does not move next operands


// NULLISH OPERATOR 
// For nullish coalesing operator (??) only "null" and "undefine" 
// are falsy value
 let numGuests = 0;
let result2 = numGuests ?? null ;
console.log(result2); // 0 is not a nullish value
// It return first non - nullish value

