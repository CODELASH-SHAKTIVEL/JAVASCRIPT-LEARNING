// BIND METHOD

function greet(){
    console.log(`${this.FirstName} and ${this.LastName} ! Welcome to My Youtube Channel`);
}

let user = {
    FirstName: "John",
    LastName :  "Doe"
}

let greeting = greet.bind(user);
greeting();
console.log(greeting()); // undefined dont use this 