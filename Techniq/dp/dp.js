//*******************************DYNAMIC PROGRAMMING*******************************              

// DP is a technique to solve a difficult prob . 
// here if recursion result will overlape then we use memoization to store data that called   **DP**

//============ fibonacci =================

function fibByRecursion (n){
    if(n<3) return 1

    return fibByRecursion(n-1)+fibByRecursion(n-2)
}

console.log( fibByRecursion(7) )

function fibByDP(n){
    let fib=[]
    fib[0] = 0
    fib[1] = 1
    fib[2] = 1
    for(let i=3; i<=n; i++){
        fib[i] = fib[i-1]+fib[i-2]
    }

    return fib[n]
}

console.log(fibByDP(7));


