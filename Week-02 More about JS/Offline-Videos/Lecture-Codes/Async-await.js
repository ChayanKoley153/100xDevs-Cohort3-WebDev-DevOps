
// Async - await -The syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain. 

// Q: Write code using async-await 
// 1.logs hi after 1 second
// 2.logs hello 3 seconds after step 1
// 3.logs heyy there 5 seconds after step 2

function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration)
    })
}

async function solve(){
    
    await setTimeoutPromisified(1000)       
    console.log("Hi");

    await setTimeoutPromisified(3000)
    console.log("Hello");
        
    await setTimeoutPromisified(5000)
    console.log("Heyy");
        
}
solve();            

console.log("Outside the Solve block");



