  class parent {
    constructor(_name,_age){
        this.name =_name
        this.age = _age
        console.log(`parent data => ${this.name}`);
    }

    check(){
        console.log(`parent data polymorph => ${this.name}`);
    }

}

class child extends parent {

    constructor(_name,_age, _wife, _status){
        super(_name,_age)
        this.wife = _wife
        this.status = _status
    }

    // check(){
    //     console.log(`child data polymorph => ${this.name}`);
    // }

}

// let p1 = new parent('jitendra','23')
// console.log(p1);

let p2 = new child('jitendra','23', "swati", 22)
console.log(p2);
p2.check()