// Set the item in local storage 

localstorage.setItem('passion' , 'programming');
localStorage.setItem('age' , 24);
console.log(localStorage)

// Get item from local storage
console.log(localStorage.getItem('age'))

// Update
localstorage.setItem("passion" , "coding")
console.log(localStorage);

// Remove Item 
localStorage.removeItem("age")