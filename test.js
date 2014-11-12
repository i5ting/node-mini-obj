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
console.log(p);
p.say();