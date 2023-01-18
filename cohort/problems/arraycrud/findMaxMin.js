// 3. Find the largest and smallest number in an unsorted array of integers

let arr = [2,5,4,7,1,56,99]

// arr.sort((a,b) => a-b) // change main array


const findMaxMin = (arr) =>{
    let min = Infinity
    let max = - Infinity

    for(let i=0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log(min, max);

    return {min, max}
}


console.log(findMaxMin(arr));