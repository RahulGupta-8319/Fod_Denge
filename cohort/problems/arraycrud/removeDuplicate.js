const arr = [1, 1, 2, 2, 3, 5,5,2];

function removeDuplicate(arr){

let res = []
    for(let i=0; i<arr.length; i++){
        let flag =0
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] == arr[j]){
                flag = 1
                break;
            }
        }
        if(flag ==0){
            res.push(arr[i])
        }

    }

return res

}

console.log( removeDuplicate(arr));

function removeDuplicate2 (arr){

    let newArr = []
    let map ={}
    for(let i=0; i<arr.length; i++){
        if(map[arr[i]]){
            continue
        }else{
            newArr.push(arr[i])
            map[arr[i]] = 1
        }
    }
    return newArr
}

console.log(removeDuplicate2(arr));