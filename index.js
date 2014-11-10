exports.Class = function(name, src) { 
	src.constructor.prototype = src; 
	window[name] = src.constructor; 
}; 