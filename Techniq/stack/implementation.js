// stack Last In First Out [LIFO]

class Stack{
    constructor(){
        this.item = []
    }
    
    push(element){
        this.item.push(element)
    }

    pop(){
        if(this.item.length == 0)
           return console.log("kuch ni h..!!")
        
        return this.item.pop()
    }

    //return top most but doesn't delete it
    peek(){
        return this.item[this.item.length-1]
    }

    isEmpty(){
        return this.item.length == 0
    }

    size(){
        return  this.item.length
    }

    clear(){
        this.item = []
    }

    print(){
        let str = ''
        for(let i=0; i<this.item.length; i++){
            str += this.item[i] + " "
        }

        return str
    }

}

let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

console.log(stack.print());

console.log( stack.pop());

console.log( stack.isEmpty() );

console.log( stack.peek() );

console.log( stack.size() );

stack.clear()

console.log(stack);




