// FUNCTION 
// CALL AND APPLY METHOD 
// WE CAN MANUALLY SET THE VALUE OF "THIS" KEYWORD USING 'CALL AND APPLY METHOD 

 "use strict"; //In strict mode, using a variable without declaring it throws an error.
let MainPlane = {
    airline:"fly India" ,
    iatacode : "FI",
    bookings:[],
    book:function(flightNum , name){
        console.log(`${name} Booked flight on ${this.airline} with Iatacode : ${this.iatacode}`);
        this.bookings.push({flightName :` ${this.airline}`, name: name ,  flightNumber:` ${flightNum} `, IATACODE :`${this.iatacode}`});
    }
}
MainPlane.book(554 , "carlos");
MainPlane.book(664 , "John");
console.log(MainPlane);


// NEW AIRLINE LAUNCHED BY SAME GROUP
// USING CALL METHOD AS 
let childPlain = {
    airline : "child Plain",
    iatacode :"CP",
    bookings:[],
}
let book = MainPlane.book;
book.call(childPlain,895 , "Zack");// CALL METHOD(object ,arg1 ,arg2)
console.log(childPlain); // As been pushed to bookings

// CHANGE OF CONTEXT
book.call(MainPlane , 897 , "elangovan");
console.log(MainPlane);

// APPLY METHOD : DIFFERENTS IS PASS WHOLE ARGUMNET IN ARRAY
book.apply(childPlain , [677 , "harsh"]);
console.log(childPlain);


//***********NOTE**********//

//book(665 , "lurie") // book is regular function
// "this value is "undefined" at aleast in strict mode
// solution using "call" method