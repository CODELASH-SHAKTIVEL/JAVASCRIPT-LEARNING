// Array Method 

// "Flat" Method 
// It creates a new array with the element of the subarray 
// "concatenated" into it 

let arr = [1,2,3[4,5,6[7,8,9]]]; //no effect on original array 
let newarr = arr.flat(1); // by default 1(depth value) 
console.log(arr);
console.log(newarr);

// FLATMAP 
// METHOD: FlatMap is similar to map method but instead of returning an array containing all elements after mapping

let MobileShop = [{
    name: 'Iphone',
    price :  0,
    rating :'very good'
} ,
{
    name:'samsung',
    price : 1000,
    rating : 'good'
}
]

let newmobileshop = MobileShop.flatMap(mobile=>{
    if(mobile.name === 'Iphone'){
     return [mobile , {
        name:"iphone",
        price :"10000",
        rating : mobile['rating'] +'excellent'
     }]
    }else{
        return [mobile]
    }
})
    console.log(newmobileshop);


