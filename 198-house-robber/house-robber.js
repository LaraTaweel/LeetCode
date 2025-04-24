/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    if (nums.length == 1) return nums[0];

    let dp = Array(nums.length).fill(0);

    dp[0] = nums [0]
    dp[1] = Math.max(nums[0], nums[1])

    for (let a =2 ; a< nums.length ; a++ ){
        dp[a] = Math.max( dp[ a-1 ] , dp[ a-2 ] + nums[a] )
    }

    return dp[nums.length-1]
    
};