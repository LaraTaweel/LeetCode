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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (root === null ) return false 
    if(subRoot === null)  return true;


    if (isEqual(root , subRoot ) ){
        return true 
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot) 
    
};
/**
 * @param {TreeNode} r
 * @param {TreeNode} s
 * @return {boolean}
 */
const isEqual=( r , s)=>{
    if (!r && !s ) return true 
    if (!r && s ) return false 
    if (r && !s ) return false

    if (!r || !s) return false;

    if (r.val !== s.val) return false;

    return isEqual( r.left , s.left ) && isEqual( r.right , s.right)
    

}