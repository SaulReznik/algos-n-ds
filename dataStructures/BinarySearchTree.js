function traverse(node, result = [], type = 'PRE_ORDER') {
    if (type === 'PRE_ORDER') result.push(node.value);
    if (node.left) traverse(node.left, result, type);
    if (type === 'IN_ORDER') result.push(node.value);
    if (node.right) traverse(node.right, result, type);
    if (type === 'POST_ORDER') result.push(node.value);
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const node = new Node(val)
        if (!this.root) {
            this.root = node;
            return this
        } else {
            let curr = this.root;
            while (true) {
                if (curr.value === node.value) return this;
                if (node.value > curr.value) {
                    if (curr.right) {
                        curr = curr.right;
                    } else {
                        curr.right = node;
                        return this
                    }
                } else {
                    if (curr.left) {
                        curr = curr.left;
                    } else {
                        curr.left = node;
                        return this
                    }
                }
            }
        }
    }

    get(value, node = this.root) {
        if (node.value === value) return node;
        if (node.left) return this.get(value, node.left);
        if (node.right) return this.get(value, node.right);
    }

    getParent(value, node = this.root) {
        if (!node.left && !node.right) return null;

        if (node.left) {
            if (node.left.value === value) return node;
            return this.getParent(value, node.left);
        }

        if (node.right) {
            console.log(value, node);
            if (node.right.value === value) return node;
            return this.getParent(value, node.right)
        }
    }

    remove(value) {
        const node = this.getParent(value);
        console.log(node);
    }

    insertRec(value, start = this.root) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return;
        }

        if (start.value >= value) {
            if (!start.left) {
                start.left = node;
                return;
            }
            this.insertRec(value, start.left);
        } else if (start.value < value) {
            if (!start.right) {
                start.right = node;
                return;
            }
            this.insertRec(value, start.right);
        }
    }

    find(val) {
        if (!this.root) return false;
        let curr = this.root;
        while (true) {
            if (curr.value === val) return true;
            if (val > curr.value) {
                if (curr.right) {
                    curr = curr.right;
                } else {
                    return false;
                }
            } else {
                if (curr.left) {
                    curr = curr.left;
                } else {
                    return false
                }
            }
        }
    }

    BreadthFirstTraverse() {
        const queue = [this.root];
        const result = [];
        while (queue.length) {
            const target = queue.shift();
            result.push(target.value);
            if (target.left) queue.push(target.left);
            if (target.right) queue.push(target.right);
        }
        return result;
    }

    DepthFirstPreOrderTraverse() {
        const result = [];

        traverse(this.root, result, 'PRE_ORDER');
        return result;
    }

    DepthFirstPostOrderTraverse() {
        const result = [];

        traverse(this.root, result, 'POST_ORDER');
        return result;
    }

    DepthFirstInOrderTraverse() {
        const result = [];

        traverse(this.root, result, 'IN_ORDER');
        return result;
    }
}

const tree = new BinarySearchTree();
//console.log(tree);
tree.insert(20);
// console.log(tree);
tree.insert(10);
// console.log(tree);
tree.insert(30);
// console.log(tree);
tree.insert(15);
// console.log(tree);
tree.insert(20);
// console.log(tree);

console.log(tree.remove(20));
// console.log(tree.find(20));
// console.log(tree.find(15));
// console.log(tree.find(19));
// console.log(tree.BreadthFirstTraverse());
// console.log(tree.DepthFirstPreOrderTraverse());
// console.log(tree.DepthFirstPostOrderTraverse());
// console.log(tree.DepthFirstInOrderTraverse());
