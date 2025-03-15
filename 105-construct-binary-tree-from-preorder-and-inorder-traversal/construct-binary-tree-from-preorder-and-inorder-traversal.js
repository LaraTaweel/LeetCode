/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    const map = new Map()
    for (let i=0 ; i<inorder.length ; i++ ){
        map.set (inorder[i] , i)
    }
    let preorderIndex = 0;

    const build =(start , end )=>{
        if ( start > end ) return null 

        const rootValue = preorder[preorderIndex++] ;
        const root = new TreeNode(rootValue);
        const midlle = map.get(rootValue) ;

        root.left = build(start , midlle -1)
        root.right = build(midlle+1 , end )
        
        return root
    };

    

    return build(0, preorder.length - 1);    
};