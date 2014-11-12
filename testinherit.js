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