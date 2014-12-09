// var $ = require('../index')
//
// /**
//  * when class have constructor
//  */
//
// require('../utils')
//
// var assert = require('chai').assert;
// var expect = require('chai').expect;
// require('chai').should();
//
// describe('Static Method', function(){
// 	before(function() {
//     // runs before all tests in this block
//   })
//   after(function(){
//     // runs after all tests in this block
//   })
//   beforeEach(function(){
//     // runs before each test in this block
//   })
//   afterEach(function(){
//     // runs after each test in this block
//   })
//
//   describe('#static()', function(){
//     it('should return static string when Person1.static()', function(){
//
// 			/**
// 			 * when class have no constructor
// 			 */
// 			$('Person1',{
// 				name:'alfred',
// 				say: function(){
// 					console.log('hello ' + this.name);
// 					return Person1.static();
// 				}
// 			})
//
// 			Person1.static = function(){
// 				return 'static';
// 			}
//
//
// 			var p1 = new Person1();
// 			p1.name = 'i5ting'
// 			console.log(p1.name);
// 			var i = p1.say();
//
// 			mini_dump('Person1 = ' + p1);
//
// 			assert.equal(i, 'static');
//
// 			// var s = Person1.static();
// 		//
// 		//
// 		// 	assert.equal(s, 'static');
//     })
//
// 		//     it('should return alfred sang when p.getName()', function(){
// 		// 		//
// 		// 	// $('Person',{
// 		// 	// 	constructor: function(name) {
// 		// 	// 		this.name = name;
// 		// 	// 	},
// 		// 	// 	getName: function(){
// 		// 	// 		return this.name;
// 		// 	// 	}
// 		// 	// })
// 		// 	//
// 		// 	//
// 		// 	// var p = new Person('alfred sang');
// 		// 	// console.log(p);
// 		// 	//
// 		// 	// assert.equal(p.name, 'alfred sang');
// 		// 	//
// 		// 	// var username = p.getName();
// 		// 	// console.log('username='+ username);
// 		// 	// assert.equal(username, 'alfred sang');
// 		// })
// 		//
//
//   })//end extend
// })