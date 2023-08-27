// REGULAR EXPRESSION 

// IT IS A PATTERN OF CHARACTER USED TO DO PATTERN MATCHING
// OR WE CAN SAY FOR  'DATA VALIDATION'

// IMPLEMENTATION OF PASSWORD VALIDATION

// LENGTH ATLEAST = 8
// AT LEAST CONTAIN ONE UPPERCASE LETTER
// AT LEAST CONTAIN ONE LOWERCASE LETTER
// AT LEAST CONTAIN ONE SIZE FROM 0 TO 9 NUMBER

let form = document.querySelector('.sign-up-Form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let PasswordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,15}$"
form.addEventListener('submit' , (e)=>{
    e.preventDefault(); // keeps the value inside for sometime 
    console.log(password.value);
    let PasswordValue = password.value;
    let result = PasswordValue.match(PasswordPattern);
    if(result){
        console.log("Your Password Is Strong");
    }
    else{
        console.log("Please Enter a stronger Password");
    }
})