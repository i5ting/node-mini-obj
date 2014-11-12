var $ = require('./index')

/**
 * when class have constructor
 */
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

/**
 * when class have no constructor
 */
$('Person1',{
	say: function(){
		console.log('hello ' + this.name);
	}
})

var p1 = new Person1();
p1.name = 'i5ting'
console.log(p1);
p1.say();