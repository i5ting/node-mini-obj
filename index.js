var util = require("util");
var inherits = require('inherits2');
var reverse = require( 'compute-reverse' );
var _ = require('lodash');


module.exports = global.Class = function(name, src) { 
	src.constructor.prototype = src; 
	global[name] = src.constructor; 
}; 