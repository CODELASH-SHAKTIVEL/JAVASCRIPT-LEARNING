// OBJECT INSIDE ARRAY 

let blocklist = [
    { UserName: "shakti",
     Reason: "abusive content"
    },
    { 
    UserName: "harry",
    Reason: "coypright issue" 
    }
]

// LOOP 
for (let i = 0; i < blocklist.length; i++) {
    console.log(blocklist[i].UserName , blocklist[i].Reason);
}