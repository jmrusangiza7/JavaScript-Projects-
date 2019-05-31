function sumNums(array){
    let sum = 0; 
    for (let i = 0; i < array.length; i++){
        sum = sum + array[i]; 
    }
    return sum; 

}

console.log(sumNums([180, 90]));