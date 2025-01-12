/*
Question:
Take input of an array and return only the even values from the array
*/

const arr = [1,2,3,4,5]

/*
Solution Method - 1 (Using the normal way taking help of for loops)
const newArr = [];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
        newArr.push(arr[i])
    }
    
}
console.log(newArr);
*/


//Method - 2 (Using Filtering)

function filterLogic(n){
    if(n % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

const ans = arr.filter(filterLogic);
console.log(ans);





