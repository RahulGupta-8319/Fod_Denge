for(let i=1; i<=3; i++){

    let row = ''
    for(let j=1; j<= 3-i; j++){
        row +=' '
    }
    for(let j=1; j<=i*2-1; j++){
        row +='*'
    }
    
    console.log(row );
}
for(let i=1; i<=2; i++){

    let row = ''
    for(let j=1; j<= i; j++){
        row +=' '
    }
    for(let j=5-i*2; j>= 1; j--){
        row +='*'
    }
    
    console.log(row );
}