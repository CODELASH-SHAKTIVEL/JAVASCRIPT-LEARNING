// Object Oriented Programming

// Chaining Methods

// class Declaration

class BankAccount {
     constructor(owner  , pin){
        this.owner = owner;
        this.pin  = pin ; 
        this.movement  = [];
     }
     getMovement(){
        return this.movement;
     }
     deposit(val){
        return this.movement.push(val);
     }
     withdraw(val){
         this.deposit(-val);
         return this
     }
}

let account = new BankAccount("Zack"  ,5678);
//Chain Method
account.deposit(45).withdraw(25).deposit(100).withdraw(40)

console.log(account.getMovement())
console.log(account);