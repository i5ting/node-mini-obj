var util = require("util");
var inherits = require('inherits2');
var reverse = require( 'compute-reverse' );
var _ = require('lodash');
// var extend = require("extend");


module.exports = global.Class = function(name, src) { 
 


// 	// console.log(arguments)
// 	var o = Object.keys(arguments).shift();
// 	console.log(o);
//
//
// newObject = Object.create({a:'dd'});
// // var i = extend(Base,arguments);
// console.log(newObject);
// 1、构建基本对象Base
	
	
	var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
	
	this.Class = function(){};
  var prototype = new this();
	
	function ex(prop){
		var _super = this.prototype;

	  // Instantiate a base class (but only create the instance,
	  // don't run the init constructor)
	  initializing = true;

	  initializing = false;
		
    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
           
            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];
           
            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);        
            this._super = tmp;
           
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
	}

// 2、把Base.extend(argv[1])

// 3、把Base.extend(argv[2])

	for( var key in arguments ){
		 console.log( arguments[key] );
		 var prop =  arguments[key];
		 ex(prop);
	}
	
	var last = arguments[arguments.length - 1];
	
	src.constructor.prototype = src; 
	global[name] = src.constructor; 
}; 