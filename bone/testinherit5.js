var $ = require('../index')

$('Marco',{
	constructor: function() { 
	},
	hello:function(){
		console.log('hello marco');
	}
});

$('Sang',{
	constructor: function() { 
	},
	hello:function(){
		console.log('hello sang');
	}
});


$('Person',{
	constructor: function(name) { 
		this.name = name;
		var a = new Marco();
		a.call(this);
	},
	change:function(i){
		// if(i == 0 ){
	// 		Marco.call(this);
	// 	}else{
	// 		console.log('changed');
	// 		Sang.call(this);
	// 	}
	//
		
	},
	say: function(){
		this.hello();
	}
})

var p = new Person('alfred sang');
// console.log(p.name);

p.say()

// p.change(1);
//
// p.say()

