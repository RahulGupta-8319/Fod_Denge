class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

let root = null

root = new Node(1)

root.left = new Node(2)
root.right = new Node(3)

root.left.left = new Node(4)

console.log(root);


