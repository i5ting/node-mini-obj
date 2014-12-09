// function dump(obj){
// 		console.log('--------------------------\n');
//     var names="";
//     for(var name in obj){
//        names+=name+": "+obj[name]+", ";
//     }
//     console.log(names);
// }
//
// function cp(des, src) {
//     if (!des) {
//         des = {};
//     }
//     if (src) {
//         for (var i in src) {
//             des[i] = src[i];
//         }
//     }
//     return des;
// }
//
// function extend(obj, prop){
// 	var o =  function(){};
// 	//dump(o);
// 	// 对象集成
// 	if(typeof obj == 'function'){
// 			// obj.call(this);
// 			dump(obj.prototype);
// 			o = cp(o,obj.prototype)
// 	}
// 	return cp(o, prop);
// }
//
// function A(){
//
// }
//
// A.prototype.name ='alfred';
// A.prototype.get_name = function(){
// 	return this.name
// };
//
//
// var assert = require('chai').assert;
// var expect = require('chai').expect;
// require('chai').should();
//
// describe('CommonUtils', function(){
//
//   describe('#extend()', function(){
//     it('should return equal when use obj', function(){
//  		 	var a = new A();
// 			var o = extend(a,{
// 				username:'sddsds'
// 			});
//
// 			assert.equal(o.username, 'sddsds');
//     })
//
//     it('should return equal when use function', function(){
//  		 	var a = new A();
//
// 			var o = extend(A,{
// 				username:'sddsds'
// 			});
//
// 			assert.equal(o.username, 'sddsds');
//     })
//
//
//   })//end extend
// })