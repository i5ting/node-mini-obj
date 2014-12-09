var $ = require('../index')

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