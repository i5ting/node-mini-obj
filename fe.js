//扩展方法的定义，不得不污染一下 Function 了
Function.prototype.extend = function (base, ppt) {
    var attr = null;
    for (attr in base.prototype) {
        //复制每个基类的prototype成员
        this.prototype[attr] = base.prototype[attr];
    }

    for (attr in ppt) {
        if (this.prototype[attr] != null) {
            //发现同名方法，重载
            var fold = this.prototype[attr];   //旧方法
            var fnew = ppt[attr];   //新的重载方法
            fnew.base = fold;  //附加base属性
            this.prototype[attr] = fnew; //重载
        }
        else {
            //添加
            this.prototype[attr] = ppt[attr];
        }
    }
};
Function.base = "(arguments.callee.base.apply(this, arguments))";

//基类定义
function Base(name) {
    this.name = name;
}
Base.prototype = {
    getName: function () {
        return this.name;
    }
};

//扩展类1
function MyClass1(name) {
    //调用父类构造方法
    Base.call(this, name);
}
//扩展自Base类
MyClass1.extend(Base, {
    //新的方法
    showName: function () {
        console.log(this.getName());
    },
    //这个方法与父类同名，将被重载
    getName: function () {
        var name = eval(Function.base); //调用父类(Base)的同名方法
        return name + "(MyClass1附加的信息)";
    }
});

//扩展类2
function MyClass2(name) {
    //调用父类构造方法
    MyClass1.call(this, name);
}
MyClass2.extend(MyClass1, {
    //再次重载
    getName: function () {
        var name = eval(Function.base); //调用父类(MyClass1)的同名方法
        return name + "(MyClass2附加的信息)";
    }
});

var inst = new MyClass2("MyClass2实例");
inst.showName();