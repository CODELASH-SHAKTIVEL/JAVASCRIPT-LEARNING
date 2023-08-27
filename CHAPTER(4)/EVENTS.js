// Event Bascis (click Event)

let eventElement = document.querySelector('.ClickMe')
eventElement.addEventListener ('click' , function(){
    console.log('clicked');
})
console.log(eventElement);


let elements = document.querySelectorAll('li');
elements.forEach(function(element) {
    let textSpan = element.querySelector('span'); // Assuming you wrap text in <span> elements
    textSpan.addEventListener('click', e => {
        console.log(e.target);
        e.target.remove(); // removes the element one by one 
        e.target.style.textDecoration = "line-through";
    });
});

    
// CREATING THE ELEMENT 
const ul = document.querySelector('ul')
let button  = document.querySelector('.ClickMe')

button.addEventListener('click' , function(){
   let li = document.createElement('li');
   li.textContent = 'something new added';
   ul.appendChild(li);
})


