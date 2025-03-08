/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    if (nums.length === 1) {
        return true;
    }


    let max = nums[0];

    for ( let i =0 ; i< nums.length ; i++ ){

        if ( i>=max && nums[i] == 0 ) {
            return false
        } 

        if ( i + nums[i] > max ) {
            max =( nums[i] +i);
        }

        if ( max >=  nums.length-1 ){
            return true 
        }
    }
     return false 

};

