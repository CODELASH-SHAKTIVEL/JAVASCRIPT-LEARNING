// User validation
let form = document.querySelector('.sign-up-Form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let UserPattern = /^[A-Za-z]{8,15}$/

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    // 'test' method return boolean values 
    let userName = user.value;
    // test method return boolean values 
    let result = UserPattern.test(userName);
    if(result == true){
        console.log("username is Valid")
    }else{
        console.log("UserName is Invalid try again")
    }
})

// Live feedback
user.addEventListener('keyup' ,(e)=>{
    if (UserPattern.test(e.target.value)){
        user.setAttribute('class' , 'success')
    }
    else {
        user.setAttribute('class' , 'error')
    }
})

