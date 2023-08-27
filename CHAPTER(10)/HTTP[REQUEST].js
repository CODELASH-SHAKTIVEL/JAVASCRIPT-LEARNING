// Asynchornous Javascript 

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

// Value state Description 
// 0 UNSENT Client has been created . open() not called yet.
// 1 OPENED open() has been called 
// 2 HEADERS_RECEIVED send() has been called and Header
// 3 Loading Downloading : repsonseText holds partial Data
// 4 Done : The operation is complete 


