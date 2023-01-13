function Chek(_name, _age){
    
    this.name = _name
    this.age = _age

    this.doNOtRepeat= function (){
        console.log('ok')
    }

    
}

Chek.prototype.optimized = function(){
    console.log('ohk')
}

let ob1 = new  Chek()

console.log(ob1)