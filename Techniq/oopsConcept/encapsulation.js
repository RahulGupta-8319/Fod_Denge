function createcar(_name, _color){
    var name = _name
    this.color = _color

    this.getName = function(){
        return name
    }
}

let car1 = new createcar('bmw', 'black')
car1.name = 'fortuner'
console.log(car1);
console.log(car1.getName()); 
