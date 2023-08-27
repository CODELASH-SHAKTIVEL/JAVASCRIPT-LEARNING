// Array Method 
// find Method 
// It return the "first" element we are lookking for ..

let students  = [{
    id:1,
    name:"shakti"
},
{
    id :2,
    name:"paul"
},
{
    id:1,
    name:"goat"
}
]
let newstudents = students.find(student =>{
    return student.id === 1;
})
console.log(newstudents);


// FINDINDEX 
// Execute function for each array element 
// it return "index " of that array element who "first" pass the 
// test "otherwise" -1
let ages = [20 ,11,12,13,14]
let newages  = ages.findIndex(age =>{
    return age > 15;
})
console.log(newages);

