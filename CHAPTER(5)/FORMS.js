// FORMS EVENT (submit form);

let form = document.querySelector('.sign-up-Form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

form.addEventListener('submit' , (e)=>{
    e.preventDefault(); // keeps the value inside for sometime 
    console.log(email.value,password.value);
    console.log(form.email.value , form.password.value);
})