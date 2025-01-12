// Reading the contents of a file
// Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.

const fs = require ('fs'); //fs module ko import kra 

const filepath = 'Week-2/Day-2-ASYNC-JS/Easy/a.txt'; 

fs.readFile(filepath, 'utf-8', (err, data) => {    
    if(err){
        console.log('Error in file :', err);        
        return        
    }
    console.log('File content:', data);
});

function expensiveOperation(){     
    let sum = 0; 
    for (let index = 0; index < 1e8; index++) {    
        sum = sum + index;
    }
    console.log("Expensive operation completed and its result : ", sum);   
}
expensiveOperation();

