// FIFO

class Queue{
    constructor(){
        this.item =[]
    }

    // enter in queue
    enqueue(element){
        this.item.push(element)
    }

    //delete ele in front
    dequeue(){
        if(this.item.length == 0)
           return 'kuch ni h...!!'
        
        return   this.item.shift()
    }

    isEmpty(){
        return this.item.length == 0
    }

    peek(){
        if(this.isEmpty()){
            return "kuchh ni h..!!"
        }
        return this.item[0]

    }

    print(){
        let str = ''
        for(let i=0; i< this.item.length; i++){
            str += this.item[i] + " "
        }
        return str
    }
}

let queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

console.log(queue.print())

console.log(queue.dequeue())

console.log(queue.isEmpty());

console.log(queue.peek());

