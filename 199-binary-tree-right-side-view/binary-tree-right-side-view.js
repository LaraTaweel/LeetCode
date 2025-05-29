function rightSideView(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();


            if (i === 0) {
                result.push(node.val);
            }

            if (node.right) queue.push(node.right);
            if (node.left) queue.push(node.left);
        }
    }

    return result;
}
