

// Q: Write code that
// 1.logs hi after 1 second
// 2.logs hello 3 seconds after step 1
// 3.logs heyy there 5 seconds after step 2
 

//Sol 1 
setTimeout(function(){
    console.log("Hi");
    setTimeout(function(){
        console.log("Hello");
        setTimeout(function() {
            console.log("Heyy");            
        },5000)
    },3000)
},1000)

// Sol 2
function callback3(){
    console.log("Heyy");    
}
function callback2(){
    console.log("Hello");
    setTimeout(callback3,5000)    
}

function callback(){
    console.log("Hi");
    setTimeout(callback2, 3000)    
}

setTimeout(callback,1000)