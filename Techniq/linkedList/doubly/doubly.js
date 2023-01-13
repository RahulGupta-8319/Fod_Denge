// ==================doubly linked list

class Node{
    constructor(val){
        this.data = val;
        this.prev = null;
        this.next = null
    }
}

// implementation of doubly linked list

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    //insertion in  doubly linked list
    addInFront(x){

        var node = new Node(x)

        if(this.head == null){
            this.head = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++

    }
    addInEnd(x){

        var node = new Node(x)

        if(this.head == null){
            this.head = node
        }else{
            let curr = this.head
            
            while(curr.next){
                curr= curr.next
            }
            curr.next = node
            node.prev = curr

            // console.log(curr);
        }
        this.size++

    }

    addAfterGivenNode(prev, ele){

        if( !prev ) return console.log('enter node');

        let new_node = new Node(ele)

        let curr = this.head

        while(curr){
            if(curr.data == prev){
                new_node.next = curr.next
                new_node.prev = curr
                curr.next = new_node
                new_node.next.prev = new_node
                this.size++
                break;             
            }else{
                curr = curr.next

            }

        }
        return -1
    }

    reverse(){
        let temp = null
        let curr = this.head
        
        while(curr){
            temp = curr.prev
            curr.prev = curr.next
            curr.next = temp
            curr = curr.prev
        }
        if(temp != null){
            // console.log(temp, curr);
            this.head = temp.prev
        }

    }


    print(){
        let curr = this.head

        while(curr){
            console.log(curr.data);
            curr=curr.next
        }
    }
}

let list = new DoublyLinkedList()

list.addInFront(10)
list.addInFront(20)
list.addInFront(30)
list.addInFront(40)

list.addInEnd(50)

list.addAfterGivenNode(20, 25)

list.print()
list.reverse()
console.log('after reverse');
list.print()




// console.log(list);