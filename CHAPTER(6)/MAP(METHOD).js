// ARRAY METHOD


// Map Method
// Create New Array from Original Array by applying 
// Transformation Function
// SAME LENGTH NEW ARRAY = OLD ARRAY
let salaries = [3000 , 4000 , 5000 ,6000];
let newsalaries = salaries.map(salary =>{
    let increment = salary/2;
    return (increment+salary);
})
console.log(newsalaries);


// FILTER METHOD (USED TO PERFORM FILTERATION ON ARRAY)
let gifts = ["watch", "icecream" , "tic" , "ring"];
let newgift = gifts.filter(gift =>{
    if(gift=="watch" || gift == "ring"){
    return(gift)
    }
})
console.log(newgift);
console.log(gifts);

// REDUCE METHOD
// - USED FOR SUMMING UP ALL THE ELEMENTS IN AN ARRAY
// RUN REDUCER FUNCTION FOR EACH ARRAY ELEMENT 
//ARRAY.REDUCE(FUNCTION(total,currentValue),initalValue)
// IT RETURN SINGLE VALUE

// SUM OF ALL ELEMENT USING REDUCE METHOD
let num = [1,2,3,4,5,6];
let sum = num.reduce(function(total , currentValue){
    return( total + currentValue );
})
console.log(sum);
console.log(num);