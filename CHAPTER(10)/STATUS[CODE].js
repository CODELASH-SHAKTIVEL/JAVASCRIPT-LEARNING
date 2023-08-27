// Asynchornous Javascript 

//HTTP RESPONSE STATUS CODE 

//INFORMATIONAL REPONSE (100 - 199)
// SUCCESSFUL RESPONSE (200 - 299)
// REDIRECTION RESPONSE (300 - 399)
// CLIENT ERROR RESPONSE (400 - 499)
// SERVER ERROR  RESPONSE (500 - 599)


// Making HTTP Request 
let request = new XMLHttpRequest();
// Opening the connection to server
console.log(request , request.readyState);


// Want the information from network to console.log okay!!!!
request.addEventListener('readystatechange' , ()=>{
   if (request.readyState === 4 && request.status ==200) {
       console.log(request.responseText); // JSON in console.log("whole information in text format")
   }
})

// Set up the request 
request.open("Get" , "https://jsonpalceholder.typicode.com/todos")

// Setting up the request => will send the request 
request.send()


// IMP : TO CAPTURE THAT ERROR WE NEED TO MAKE CALL BACK FUNCTION