//====================== merge sort

let arr = [2,7,9,8,11,13,15,35,1]
let n = arr.length
let s = 0
let e = n-1
console.log(arr);
mergeSort(arr,s,e)
console.log(arr);


function concquer(arr, s ,mid, e){
    
    let lenLeftArr = mid-s+1
    let lenRightArr = e-mid

    let leftArr = new Array(lenLeftArr)
    let rightArr = new Array(lenRightArr)



    for (let i = 0; i < lenLeftArr; i++) {
        leftArr[i] = arr[s+i]     
    }
    for (let i = 0; i < lenRightArr; i++) {
        rightArr[i] = arr[mid+1+i]     
    }

    let l=0, r=0, f =s
    while(l<lenLeftArr && r<lenRightArr){
        if(leftArr[l] <= rightArr[r]){
            arr[f] = leftArr[l]
            l++
        }else{
            arr[f] = rightArr[r]
            r++
        }
        f++
    }

    while (l<lenLeftArr) {
        arr[f] = leftArr[l]
        l++
        f++
    }
    while (r<lenRightArr) {
        arr[f] = rightArr[r]
        r++
        f++
    }

}


function mergeSort(arr,s,e){
    //1.divide 
    //2.concquer

    //base
    if(s >= e) return

    //recursive
    let mid =Math.floor( (s+e) / 2 )

    mergeSort(arr,s,mid)
    mergeSort(arr,mid+1,e)

    concquer(arr , s, mid, e)

}
