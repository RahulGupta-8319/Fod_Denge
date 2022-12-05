//insetion sort
let arr = [2,23,4,3]
//1.take 2st element arr[1]
//2.check all left element and swap it

const insertion = (arr)=>{

    for(let i=1; i<arr.length; i++){
        let ele = arr[i]   //3
        let j = i-1   //2 1 0
        while(j>=0 && arr[j] > ele){
            arr[j+1] = arr[j]   //[2,23,23,3] => [2,4,23,3] //=> [2,4,23,23] => [2,4,4,23] => [2,3,4,23]
            j--
        }
        arr[j+1]=ele
    }
   console.log(arr);
}
insertion(arr)