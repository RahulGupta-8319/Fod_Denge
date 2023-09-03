
function createcar(_name,  _color){
     this.name = _name,
     this.color = _color
     console.log(this);
}
 let obj1 = {
     name : "bmw",
     color:"black"
 }
 let obj2 = {
     name : "fortuner",
     color:"white"
 }

let car1 = new createcar('fortuner','toyota', 'white')
console.log(  car1);