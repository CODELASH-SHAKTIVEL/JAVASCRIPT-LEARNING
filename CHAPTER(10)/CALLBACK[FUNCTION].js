 // Asynchornous Javascript 

 // Callback function

let todos = (callback)=>{
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange' , ()=>{
    if (request.readyState === 4 && request.status ==200) {
       callback(undefined , request.responseText);  // Regular Js Object 
       let data = JSON.parse(request.responseText);
    }else if (request.readyState === 4){
        callback("There is an error" , undefined);
    }
    })
    
    // Set up the request 
    request.open("Get" , "JSON.json")
    
    // Setting up the request => will send the request 
    request.send()
}

console.log(1);
console.log(2);
// Outside there is an call back function which is async approach
todos((error, Data) =>{
   if(error){
      console.log(error)
   }else{
    console.log(Data);
   }
})
console.log(3);
console.log(4);