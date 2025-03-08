/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s;

    let row =[]
   

    for (let i = 0 ; i<numRows ; i++ ){
        row[i] =[]
    }
    
    
    let index = 0 
    let reverse = false ;

    for (let i =0 ; i< s.length ; i++){

    row[index].push(s[i]);

        if(reverse ){
            index-- 
        }else {
            index++ 
        }

        if (index === 0 || index == numRows-1){
            reverse = !reverse
        }


    }

    let out = []

    for (let i =0 ; i< numRows ; i++ ){
        out.push(row[i].join(""))
    }
    return out.join("")



};