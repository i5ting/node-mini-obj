node-mini-obj
=============

[![npm version](https://badge.fury.io/js/node-mini-obj.svg)](http://badge.fury.io/js/node-mini-obj)

## Install

```
npm install --save node-mini-obj
```


## Usage

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