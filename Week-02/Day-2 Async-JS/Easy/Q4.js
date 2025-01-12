// Write to a file
// Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require ('fs')

const data = 'Input data from Q4 file.'

const filepath = 'Week-2/Day-2-ASYNC-JS/Easy/b.txt'; 

fs.writeFile(filepath, data , (err) => {     
    if(err){
        console.log('Error in file :', err);        
        return        
    }
    console.log("Data written in b.txt, Now you can the file!");
});


function expensiveOperation(){     
    let sum = 0; 
    for (let index = 0; index < 1e8; index++) {  
        sum = sum + index;
    }
    console.log("Expensive operation completed and its result : ", sum);   
}


expensiveOperation();
