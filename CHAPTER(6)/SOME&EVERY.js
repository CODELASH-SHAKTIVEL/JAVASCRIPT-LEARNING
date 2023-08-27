// Array Method 
// "some" and "every" method 
// some method return "true" if "any" array element pass the test 
// every method return "true" if "all" elements pass the test 

// Some
let scores = [25,65,67,68,56];
let newscores = scores.some(score=>{
    return score>50;
})
console.log(newscores); // true 


// Every
let newscore= scores.every(score=>{
    return score >50;
})
console.log(newscore); // false 

