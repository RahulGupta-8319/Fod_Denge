var addStrings = function(num1, num2) {
    var len1 = num1.length; // 4
    var len2 = num2.length;  //2
    var max = Math.max(len1, len2);  //4
    var res = Array(max);   //[undefined, un..., un.., un...]
    var carry = 0;          //    1         2      9      0
    var val = 0;

    for (var i = 0; i < max; i++) {
        val = Number(num1[len1 - 1 - i] || 0) + Number(num2[len2 - 1 - i] || 0) + carry;  // 10  9    2   1
        carry = Math.floor(val / 10);                                                     // 0    1  0     0
        res[max - 1 - i] = val % 10;                                                      
    }
     
    return (carry || '') + res.join('');
};


let res = addStrings("1234","56")

console.log(res, typeof res)