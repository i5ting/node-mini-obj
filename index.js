var util = require("util");
var inherits = require('inherits2');
var reverse = require( 'compute-reverse' );
var _ = require('lodash');
// var extend = require("extend");

// extend = function (Klass, Zuper) {
//     Klass.prototype = Object.create(Zuper.prototype);
//     Klass.prototype.constructor = Klass;
// } 

function extend(o, base, args){  
    base.apply(o, args);  
    var methods = {};  
    for(var i in o){  
        if(typeof o[i] == 'function'){  
            methods[i] = o[i];  
        }  
    }  
    return methods;  
} 

module.exports = global.Class = function(name, src) { 
 
	// for( var key in arguments ){
// 		 console.log( arguments[key] );
// 	}
//
// 	// console.log(arguments)
// 	var o = Object.keys(arguments).shift();
// 	console.log(o);
//

	newObject = Object.create({a:'dd'});
	// var i = extend(Base,arguments);
	console.log(newObject);
	
	var last = arguments[arguments.length - 1];
	
	src.constructor.prototype = src; 
	global[name] = src.constructor; 
}; 