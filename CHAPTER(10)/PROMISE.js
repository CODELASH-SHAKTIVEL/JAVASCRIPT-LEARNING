 // Asynchornous Javascript 

 // PROMISE FUNCTION
 let todos = (resources)=>{
    return new Promise ((resolve , reject)=>{
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange' , ()=>{
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse.toString(request.responseText);
           resolve(data);   
        }else if (request.readyState === 4){
              reject("ERROR IN FETCHING THE DATA")
        }
        })
        
        // Set up the request 
        request.open("Get" , resources); // change in json file
        
        // Setting up the request => will send the request 
        request.send()
    })
}

// PROMISES
// todos("JSON.json").then 
// ((data)=>{
//     console.log (`Data : ${data}`)
// }).catch((error)=>{
//     console.log(error)
// })


// CHAINING OF PROMISES DRAWBACK : ONLY ONE CATCH METHOD ENOUGH TO CATCH ANY ERROR 
todos("JSON.json").then 
((data)=>{
    console.log (`Data : ${data}`) // PROMISE 1
    return todos("mario.json")
}).then((data)=>{
    console.log(`Mario Data: ${data}`); // PROMISE 2
}).catch((error)=>{
    console.log(error)
})



/*************************************/
// PROMISE DECLARATION [GENERAL]
// let getSomething = ()=>{
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> resolve ("I am resolved") ,1500 ) ;
//         console.log ('Promise Started')
//         reject("some error")
//     })
// }

// getSomething().then 
// ((data)=>{
//     console.log (`Data : ${data}`)
// }).catch((error)=>{
//     console.log(error)
// })
/*******************************************/