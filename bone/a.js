var $ = require('../index')
	$(false);

require('../utils')


mini_dump($);

$('Marco',{
	constructor: function() {
	},
	hello:function(){
		console.log('hello marco');
	}
});


$('Sang', {
	constructor: function() {
	},
	hello:function(){
		console.log('hello sang');
	}
});


var a = new Marco();

var s = new Sang();

// mini_dump(a)

$('Person' ,a,s , {
	constructor: function(name) { 
		this.name = name;
		// Marco.call(this);
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
		// mini_dump(this)
		this.hello();
	}
})

var p = new Person('alfred sang');
// console.log(p.name);

p.say()

// p.change(1);
//
// p.say()


// a.hello()


$('Person2',p ,a, {
	constructor: function(name) {
		this.name = name;
		// Marco.call(this);
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
		// mini_dump(this)
		this.hello();
	}
})

var p = new Person2('alfred sang');
// console.log(p.name);

p.say()


$('Person3',p ,a);

var p = new Person3('alfred sang');
// console.log(p.name);

p.say()
