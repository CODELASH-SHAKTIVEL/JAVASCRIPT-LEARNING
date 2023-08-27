//THIS  KEYWORDS 

// IN EACH METHOD WE HAVE AN ACCESS OF SPECIAL KEYWORD CALLED 
// "THIS"
 
// "THIS" KEYWORD REPRESENTS THE OBJECT. "CALLING" THE "METHOD" 
// IN WHICH "THIS" IS "PRESENT"

//EXAMPLE

let person ={
    firstName:"harry",
    lastName:"brook",
    city:"delhi",
    birthyear:1998,
    education:"software engineer",
    getsummary:function(){
        // return `${this.firstName} ${this.lastName} lives in ${this.city}` // will return updated string
        return this // will return the whole object 
    }
}
console.log(person.getsummary())

// Step 1: check in which method we use this keyword 
// Step 2: Owner of that method (who is calling those method)
