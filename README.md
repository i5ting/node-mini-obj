node-mini-obj
=============

[![npm version](https://badge.fury.io/js/node-mini-obj.svg)](http://badge.fury.io/js/node-mini-obj)

## Install

```
npm install --save node-mini-obj
```

## 第一版

### 源码

```
module.exports = global.Class = function(name, src) { 
	src.constructor.prototype = src; 
	global[name] = src.constructor; 
}; 
```

### 用法

```
var $ = require('./index')

$('Person',{
    constructor: function(name) { 
        this.name = name;
    }, 
    say: function(){
        console.log('hello ' + this.name);
    }
})

var p = new Person('alfred sang');
p.say();
```


还是蛮舒服的吧？

## 第二版

这个版本主要增加了继承功能，具体用法如下

### 基本用法

没有构造函数的情况

```
$('Person1',{
	say: function(){
		console.log('hello ' + this.name);
	}
})

var p1 = new Person1();
p1.name = 'i5ting'
console.log(p1);
p1.say();
```

有构造函数的情况

```
var $ = require('./index')

$('Person',{
	constructor: function(name) { 
		this.name = name;
	}, 
	say: function(){
		console.log('hello ' + this.name);
	}
})

var p = new Person('alfred sang');
p.say();
```

### 测试1：plain object继承

```
var $ = require('./index')

$('Person',{
	constructor: function(name) { 
		console.log('---1----');
		this.name = name;
	}, 
	bbb:'bbb',
	hello:function(){
		console.log('hello');
	}
},
{
	constructor: function(name) { 
		console.log('---2----');
		this.name = name;
	
	}, 
	say: function(){
		console.log('hello ' + this.name);
		console.log(this.bbb);
	}
})

var p = new Person('alfred sang');
p.hello()
p.say();
```


### 测试2：使用已有对象完成继承

```
var $ = require('./index')

$('Base',{
	constructor: function(name) { 
		this.name = name;
	},
	hello:function(){
		console.log('hello');
	}
})

var base = new Base('a person');

$('Person',base,{
	constructor: function(name) { 
		this.name = name;
	}, 
	say: function(){
		console.log('hello ' + this.name);
		this.hello();
	}
})

var p = new Person('alfred sang');
p.say();
p.hello();
```


### 测试3：使用继承对象的原型方法

```
var $ = require('./index')

var Base = function(name){
	this.name = name;
}

Base.prototype.hello = function(){
	console.log('---Base.prototype.hello----');
}

var base = new Base('a person');

$('Person',base,{
	constructor: function(name) { 
		this.name = name;
	}, 
	say: function(){
		console.log('hello ' + this.name);
		this.hello();
	}
})

var p = new Person('alfred sang');
p.say();
```



## Test

	npm test

or 

	node test
	
结果

```
➜  node-mini-obj git:(master) ✗ npm test

> node-mini-obj@1.0.0 test /Users/sang/workspace/github/node-mini-obj
> node test

hello alfred sang
```

## TODO

- 使用init作为构造函数
- 使用this._super调用父类方法
- 完善的继承链

