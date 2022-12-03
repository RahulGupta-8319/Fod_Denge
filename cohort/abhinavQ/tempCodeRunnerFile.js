if(typeof x=='number' ){
    //check if it is a integer
    if(Number.isInteger(x)){
        console.log(`${x} is integer`);
    }else{
        console.log(`${x} is float value`);
    }
}else{
    console.log(`${x} is not a integer`);
}