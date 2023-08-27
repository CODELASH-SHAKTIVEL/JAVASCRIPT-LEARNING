 // Asynchornous Javascript 

 // Callback Function

 let todos = (resources , callback)=>{
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
    request.open("Get" , resources); // change in json file
    
    // Setting up the request => will send the request 
    request.send()
}


// Outside there is an call back function which is async approach
// CALL BACK HELL [CHAIN OF TODOS]
// USUALLY DONT PERFERE => CALL BACK HELL DIFFICULT TO DEBUG 
todos("JSON.json", (error, Data) =>{
   if(error){
      console.log(error)
   }else{
    console.log(Data);
   }
   todos("mario.json", (error ,Data)=>{
    if(error){
        console.log(error)
     }else{
      console.log(Data);
     }
   })
})
