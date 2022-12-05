//================ selection sort
//1.slect 1st element take is as a min
//2.itrate whole array update min
//3.perform swap
         
let arr=[2,4,56,4,3,54,1,3,7]
           
const selection = (arr) =>{
    for(let i=0; i<arr.length; i++){
        let min = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[min]>arr[j]){
                min=j
            }
        }
        if(i != min){
            arr[i] = arr[i]+arr[min]
            arr[min] = arr[i]-arr[min]
            arr[i] = arr[i]-arr[min]
        }
    }
    console.log(arr);
}
selection(arr)
