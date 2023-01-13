class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    // insertion of data 
    insert(data){

        let newNode = new Node(data)

        if(this.root == null){
            this.root = newNode
        }else{
            //find the correct position in the tree
            this.insertNode( this.root, newNode)
        }
    }

    insertNode(node, newNode){

        //go left side of the tree
        if(newNode.data < node.data){
            if(node.left == null){
                node.left = newNode
            }else{
                this.insertNode(node.left, newNode)
            }

        }else
        //go right side of the tree
        {
            if(node.right == null){
                node.right = newNode
            }else{
                this.insertNode(node.right, newNode)
            }

        }
    }

    //remove data from tree

    remove(data){
        this.root = this.removeNode(this.root, data)
    }

    removeNode(node, key){

        if(node == null){
            return null
        }else if(key < node.data){
            node.left = this.removeNode(node.left, key)
            return node
        }else if(key > node.data){
            node.right = this.removeNode(node.right, key)
            return node
        }
        //key is similar to node
        else{
            //deleting node with no children
            if(node.left == null && node.right == null){
                node = null;
                return node
            }

            // deleting node with one children
            if(node.left == null){
                node = node.right
                return node
            }else if(node.right == null){
                node = node.left
                return node
            }

            // delete node with two children

            let tamp = this.findMinNode(node.right)
            node.data = tamp.data

            node.right = this.removeNode(node.right, tamp.data)
            return node

        }
    }

    findMinNode(node){
        if(node.left == null){
            return node
        }else{
            return this.findMinNode(node.left)
        }
    }

    preorder(root){
        if(root != null){
            console.log(root.data,'pre')
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    inorder(root){
        if(root != null){
            this.inorder(root.left)
            console.log(root.data, 'in')
            this.inorder(root.right)
        }
    }

    postorder(root){
        if(root != null){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.data, 'post');

        }
    }
}

let bst = new BinarySearchTree()

bst.insert(10)
bst.insert(30)
bst.insert(20)
bst.insert(5)

bst.preorder(bst.root )
bst.inorder(bst.root)
bst.postorder(bst.root)


console.log(bst);

