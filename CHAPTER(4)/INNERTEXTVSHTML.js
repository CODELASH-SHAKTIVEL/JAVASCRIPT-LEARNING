// UPDATING AND CHANGING CONTENT

// INNERTEXT
// IGNORE SPACES
// RETRIEVE AND SET CONTENT IN PLAIN TEXT 
let contents  = document.querySelector('.content');
contents.innerText += "<p>great coder</p>"// update
console.log(contents.innerText)


// innerHTML 
// it does not ignore spaces 
// retrieve and set content in html formate
// content.innerHTML += "<p>Great coders</p>"; In html format
// console.log(content.innerHTML);