function merge(num1,m,num2,n){
    let i = m-1
    let j = n-1
    let k = m+n-1

    while(i>=0&&j>=0){
        if(num1[i]>num2[j]){
            num1[k] = num1[i]
            k--
            i--
        }else{
            num1[k] = num2[j]
            k--
            j--
        }
    }
    while(i>=0){
        num1[k] = num1[i]
        k--
        i--
    }
    while(j>=0){
        num1[k] = num2[j]
        k--
        j--
    }
}

console
