var $ = require('../index')

$('PersonBase',{
	constructor: function(name) { 
		console.log('---1----');
		this.name = name;
	}, 
	bbb:'bbb',
	hello:function(){
		console.log('hello');
	}
});

$('Person',{
	constructor: function(name) { 
		PersonBase.call(this);
		this.name = name;
	}, 
	say: function(){
		console.log('hello ' + this.name);
		console.log(this.bbb);
	}
})

var p = new Person('alfred sang');
console.log(p.name);

p.hello()
p.say();