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
 * @return {number[][]}
 */
var levelOrder = function(root) {

    if (root == null ) {
        return [] 
    }

    const queue =[root]
    const result =[]

    while (queue.length >0 ){
        const queueLength = queue.length 
        const currentLevel =[]

        for (let i =0 ;i<queueLength ;i++){

            const curr =queue.shift()

            if (curr.left ){
                queue.push(curr.left)
            }
            if (curr.right){
                queue.push(curr.right)
            }
            currentLevel.push(curr.val)
        }
        result.push(currentLevel)



    }
return result 
    
};