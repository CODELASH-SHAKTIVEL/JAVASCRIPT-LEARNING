// setTimeOut and setinterval 

// setTimeout -> Run function "once" after "interval" of time 

// setInterval -> Run function repeatedly , starting after the interval of time , then repeating ....

// setTimeOut 

// setTimeout(fun/code ,delay, arg1 ,arg2...)

function greeting(name){
    console.log("Hello "+ name);
}
setTimeout(greeting,5000,"john");
setInterval(greeting,5000,"harry");
