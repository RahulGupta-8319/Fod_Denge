// Emplementation of linked list


//=> create Node
class Node{
  constructor(element){
       this.element = element;
       this.next = null
  }
}

//=> create LinkedList
class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0
  }

  //==> add element in linked list
  add(element){
    let node = new Node(element)

    let curr

    if(this.head == null){
      this.head = node
    }else{
      curr = this.head
    
      //iterate the end of the list
      while(curr.next){
        curr = curr.next
      }

      curr.next = node
    }
    this.size++
    console.log(this.size);
  }

  insertInFront(element){

    let node = new Node(element)

    if(this.head == null){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  //insert the element in the index 

  insertAt(element, index){

    if(index < 0 || index >this.size){
      return console.log('enter valid index');
    }else{
      let node = new Node(element)
      let curr

      if(index ==0){
        node.next = this.head;
        this.head = node
      }else{
        curr = this.head
        let count = 0

        while(count < index -1){
          count++
          curr = curr.next
        }

        // adding an element

        node.next = curr.next;
        curr.next = node
      }
    }
    this.size++
  }

  // remove from index 
  removeAt(index){

    if(index < 0 || index >= this.size){
      return console.log("eneter valid index");
    }else{
      let curr = this.head
      let count = 0


      if(index == 0){
        this.head = curr.next
      }else{

        while(count < index-1){
          count++;
          curr = curr.next
        }

        curr.next = curr.next.next
      }

    }

  }

  //remove element
  removeElement(element){

    let curr = this.head
    let prev = null

    while(curr){

      if(curr.element == element){

        if(prev == null){
          this.head = curr.next
        }else{
          prev.next = curr.next
        }

        this.size--
        return curr.element

      }else{
        prev = curr
        curr = curr.next
      }
    }
    return -1 
  }

  //return index of the given element

  

  print(){

    let curr = this.head

    while(curr){
      console.log(curr.element);
      curr = curr.next
    }
  }
  
}

let list = new LinkedList()

list.add(10)  
// list.add(20)  
// list.add(30)
// list.add(40)
// list.insertInFront(20)
// list.insertAt(25, 2)
// list.removeAt(3)

// list.removeElement(25)

list.print()


console.log( list );