// for- of-loop

let hotel = {
    names: 'Hilton',
    location:'Mumbai' , // key value pair
    categories : ["a","b","c","d"],
    MainMenu : ["Chinese" , "vada pav" , "chicken briyani"],
    openingHours :{
        sunday : {open :"9:00", close : "11:00"},
        monday : {open :"19:00", close : "11:00"},
        Tuesday : {open :"08:00", close : "11:00"},
        
    }
}

let menu  =  [...hotel.categories , ...hotel.MainMenu];
console.log(menu);

// If only one value 
for (let elem of menu) console.log(elem);

// if we want both index as well as value
for(let [i,items] of menu.entries()){
    console.log(`${i+1} : ${items}`)
} 