/*
Question :
Given an array, give me back a new array in which the value is multiplied by 2:
Input - [1,2,3,4,5]
Ouput - [2,4,6,8,10]
*/

const input = [1,2,3,4,5]

/*
 Solution - Method 1

const NewArray=[];
for (let i = 0; i < input.length; i++) {
    NewArray.push(input[i]*3);    
}
console.log(NewArray);
*/

// Solution - Method 2 {Using Map}

function transform(i){
    return i*2;
} 

const ans = input.map(transform);
console.log(ans);

/*
const ans = input.map(function(i){
    return i*2;    
    });
*/








