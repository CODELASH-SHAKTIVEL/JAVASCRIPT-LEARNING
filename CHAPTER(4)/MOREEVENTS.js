// LEARN  Bubbling And Delegation ON YOUR OWN
// MORE EVENTS 


 // COPY EVENTS 
 let copyRightElement  = document.querySelector('.copy');
 copyRightElement.addEventListener('copy' , ()=>{
    console.log("Copy Right Clicked");
 })


 // MOUSE MOVE EVENT 
 let box  = document.querySelector('.box');
 box.addEventListener('mousemove' , (e)=>{
    console.log(e.offsetX , e.offsetY);
 })