let str = "hello "
console.log( reverseStr(str) );
function reverseStr(str){
    //base
    if(str.length == 0) return ''

    //recursive
    return reverseStr( str.slice(1) ) + str[0]
}
