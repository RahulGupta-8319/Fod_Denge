let person1 = {
    fname : 'jitendra',
    lname: "yadav",

    printName : function (_any,_many, arr){
        console.log(`my name is ${this.fname} ${this.lname}`+" "+ _any +" "+_many + arr);
    }
}

let person2 = {
    fname : 'swati',
    lname: "nigam"

}

//call
person1.printName.call(person2, ['abc','def'])

//apply
person1.printName.apply(person2, ['abc','def'] )

// let x = person1.printName.bind(person2,['abc','def'] )
// x()
// console.log( x );


// console.log(person1.printName);