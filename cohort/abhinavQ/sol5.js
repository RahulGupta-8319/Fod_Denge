//============================

// 1.segregate 0s and 1s 
// let arr = [1,0,1]  //  [0,1,1]
// function segregate0and1(arr,n){       
//     arr.sort((a,b) => a-b )  
// }

//----------------------------------

// function segregate0and1(arr,n){ 
//     let count0 = 0     
//     for(let i in arr){
//         if(arr[i] == 0){
//             count0++
//         }
//     }
//     for(let i=0; i<count0; i++){
//         arr[i]=0
//     }
//     for(let i=count0; i<n; i++){
//         arr[i]=1
//     }  
// }
//----------------------------------

// let arr = [0,1,1,0]
function byTwoPointer(arr){
    let s=0
    let e=arr.length-1
    while(s<e){
        if(arr[s] == 0){
            s++
            continue
        }
        if(arr[e] == 1){
            e--
            continue
        }
        //arr[s]=1, arr[e]=0
        //swap
        arr[s]=arr[s]+arr[e]
        arr[e]=arr[s]-arr[e]
        arr[s]=arr[s]-arr[e]

        s++
        e--
         
    }

}

// ================================

// 2. output Element without pair 
 
// let arr = [1,2,3,3,3,3]
// outPair(arr, 13)
function outPair(arr,n){
    let mp = new Map

    for(let val of arr){
        if(mp.has(val)){
            mp.set(val, mp.get(val)+1)
        }else{
            mp.set(val, 1)
        }
    }

    let ans =[]
    mp.forEach((val,key)=>{
          if(val%2 ==1){    // odd=> val&1 [bit manipulation]
            ans.push(key)
          }

    })
    console.log(mp, ans);
}
 

//=================================

   
   