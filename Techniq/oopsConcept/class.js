class createcar {
    constructor(_name,_color){
        this.name = _name
        this.color = _color
    }

    carDetails(){
        console.log(`car details: ${this.name} ${this.color} ${this.check()}` );
    }

    static carName (_name){
        console.log(`car details: ${this.color} ${_name} `);
    }
}

createcar.prototype.check = function(){
    console.log(`${this.name} 7467`);
}


let car1 = new createcar("bmw", "black")
// console.log(car1);
// car1.carDetails()
// car1.check()
createcar.carName('harier')