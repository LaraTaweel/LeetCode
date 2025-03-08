/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    const RomanValue ={
        'I' : 1 , 
        'V' : 5,
        'X' : 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000

    }
    let result =0;

    for ( let i=0 ; i< s.length ; i++){
        let num1 = RomanValue[s[i]];
        if (i + 1 < s.length){
            let num2 = RomanValue[s[i + 1]];
            if (num1 >= num2) {
                result += num1;
                } else {
                    result += (num2 - num1);
                    i++;
                }

        }else{
        result += num1;
        }       
    }
    return result;

};