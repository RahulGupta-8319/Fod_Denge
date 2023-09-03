let obj = {
    name:"tom",
    age:20,
    myfn2: function (){
        function myfn3(){
            console.log(this);
        }
        myfn3()
    }
}
obj.myfn2() 