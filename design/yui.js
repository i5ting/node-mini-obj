
var Class = {
    extend:function(subClass,superClass){
        var F = function(){};
        F.prototype = superClass.prototype;
        subClass.prototype = new F();           
        subClass.prototype.constructor = subClass;
         
        subClass.superclass = superClass.prototype;
        if(superClass.prototype.constructor == Object.prototype.constructor) {
            superClass.prototype.constructor = superClass;
        }
    }
    /**
     * 调用父类的构造函数
     * @param subClass 子类函数名
     * @param subInstance 子类对象引用
     */
    ,callSuper:function(subClass,subInstance){
        var argsArr = [];
     
        for(var i=2,len=arguments.length; i<len; i++) {
            argsArr.push(arguments[i]);
        }   
         
        subClass.superclass.constructor.apply(subInstance, argsArr);  
    }
    /**
     * 子类中调用父类的函数
     * @param subClass 子类函数名
     * @param subInstance 子类对象引用
     * @param methodName 父类方法名
     */
    ,runSuperMethod:function(subClass,subInstance,methodName) {
        return subClass.superclass[methodName].call(subInstance);
    }
 
};
 
// Demo
// 声明父类
var Person = function(param){
    this.name = param.name;
    this.age = param.age;
}
Person.prototype.sayName = function(){
    console.log("My name is " + this.name);
}
Person.prototype.sayAge = function(){
    console.log("My age is " + this.age);
}
Person.prototype.getAge = function(){
    return this.age;
}
 
 
// 声明子类
var Man = function(param){
    // 调用父类的构造函数
    Class.callSuper(Man,this,param);
}
// 继承父类
Class.extend(Man,Person);
 
// 覆盖父类的sayAge方法
Man.prototype.sayAge = function(){
    console.log(this.name + "'s age is " + this.age);
}
// 覆盖父类的方法,并且调用父类原来的方法
Man.prototype.getAge = function(){
    // 先调用父类方法返回年龄
    var age = Class.runSuperMethod(Man,this,'getAge');
    // 年龄+1
    console.log(this.name + "'s age is " + (age + 1));
}
 
 
// 测试
var man = new Man({name:"Jim",age:22});   
man.sayName(); // 这里调用父类的方法
man.sayAge();  // 这里调用自己的方法
man.getAge();  