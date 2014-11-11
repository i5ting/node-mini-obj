var util = require("util");


var extend = require("extend");


function _inherit( props) {
	var base =  function(){}
	
	console.log(	base.prototype);

  if (props) {
      for(var p in props) {
				console.log(p);
          if (props.hasOwnProperty(p)) {
              base.prototype[p] = props[p];
          }
      }
  }
	
	return base;
};

var b = _inherit({
	say:function(){
		console.log('base hello ' + this.name);
	}
});
util.inherits(b);
//
// b.say();