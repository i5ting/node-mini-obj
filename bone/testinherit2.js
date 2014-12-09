var $ = require('../index')

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