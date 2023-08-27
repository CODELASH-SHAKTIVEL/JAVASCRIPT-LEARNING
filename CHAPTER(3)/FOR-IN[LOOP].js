// FOR IN LOOP IS USED FOR OBJECTS (for each iteration return a key is used in object )

let car = {
    model:"toyata",
    color: "red",
    year: 2015,
}

let x ="";
for(let key in car){
     console.log(key); // model , color , year
     console.log("*****");
     console.log(car[key]);
     x = x + car[key] ; // [toyatared2015]will return the whole string at one time dont use [let]
    console.log(x); 
}