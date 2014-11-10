module.exports = global.Class = function(name, src) { 
	src.constructor.prototype = src; 
	global[name] = src.constructor; 
}; 