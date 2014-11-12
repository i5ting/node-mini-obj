var $ = require('./index')

$('Person',{
	hello:function(){
		console.log('hello');
	}
},
{
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