/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {

    let max = -Infinity ; 

    
    let findTheSum= (node)=>{
        if (!node) return 0 ;

        let left =findTheSum(node.left ),
         right = findTheSum(node.right),
         sums = left +right +node.val ,
         leftSum = left +node.val,
         rightSum = right +node.val ;


        max = Math.max (max , sums , leftSum , rightSum , node.val)

        return Math.max( leftSum ,rightSum , node.val)
    };
    
        findTheSum(root); 
        return max


};