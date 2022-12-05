
let countPrimes = function(n) {
    if(n<2) return 0
    let res=[]
    
    for(let i=2; i<n; i++){
        let flag = 1
        for(let j=2; j<i; j++){
           if(i % j ==0){
               flag = 0
           }
        }
        if(flag){
            res.push(i)
        }    
    }  
    console.log(res)
    return res.length
    
};
console.log(countPrimes(100000))