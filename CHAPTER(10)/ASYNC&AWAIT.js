// Asynchornous Javascript 

//ASYNC AND AWAIT

let todos = async()=>{
let response = await fetch("JSON.json")
// custom error
if(response.status !=200){
    throw new Error('something went wrong');
}
let data = await response.json()
return data
}

todos()
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error.message)
});