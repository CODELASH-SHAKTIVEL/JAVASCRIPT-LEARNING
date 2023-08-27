// Asynchornous Javascript

// Fetch API

fetch("JSON.json")
.then((response)=>{
    console.log("promise resolved" , response)
    return response.text(); //return the response as text (not json)
})
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
    console.log(error)
})