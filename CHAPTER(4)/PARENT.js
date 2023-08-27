// PARENT , CHILDREN AND SIBLING ELEMENT

let parentElement = document.querySelector('.content');
// get the element with class content and store it in a variable called 'parentElement'
console.log(parentElement.children); // <div id="content">...</div>

// We Can not run foreach method on HTMLCOLLECTION so
// First cover it to into array

console.log(Array.from(parentElement.children))

Array.from(parentElement.children).forEach(function(element){
    element.classList.add("coders")
})


// CHILD ELEMENT
let childElement  = document.querySelector('h2')
// find the parent of specific child
console.log(childElement.parentElement);


// Find Next/previous Sibling of child 
console.log(childElement.nextElementSibling)
console.log(childElement.previousElementSibling)
