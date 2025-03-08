/**
 * @param {number[]} candies 
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = candies[0];
    let result=new Array(candies.length)

    for ( let i =1 ; i< candies.length ; i++){
        if (candies[i]>maxCandies )
        maxCandies =candies[i];
    }
    for ( let i =0 ; i< candies.length ; i++){
        if( candies[i] + extraCandies >= maxCandies){
        result[i] = true 
    }
    else result [i]= false 
    }
    return result



};
