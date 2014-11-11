http://blog.csdn.net/zhangxin09/article/details/4782517

```
function base(){
    this.id = 888;
    this.say = function(v){
        alert(v);
    }
}
function base2(){
    var sup =  extend(this, base, arguments);
    this.say = function(){
        sup.say(this.id);
    }
}
function foo(){
    var sup =  extend(this, base, arguments);
    this.say = function(){
        alert(99);
        sup.say(this.id);
    }
}
function extend(o, base, args){
    base.apply(o, args);
    var methods = {};
    for(var i in o){
        if(typeof o[i] == 'function'){
            methods[i] = o[i];
        }
    }
    return methods;
}
a = new foo();
a.say();
```


以前在哪儿看到的。

```
function A(){
    this.name = "abc";
    this.say = function(){    
        alert(this.name);
    }
}

function B(){
    A.call(this);
}

var b = new B();
b.say();
```

这个方法可以多重继承。但不继承内部变量。亦即，上述代码中以 var name 形式声明的变量，不会继承到。