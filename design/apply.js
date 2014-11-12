function A(){
    this.name = "abc";
    this.say = function(){    
        console.log(this.name);
    }
}

function B(){
    A.call(this);
}

var b = new B();
b.say();