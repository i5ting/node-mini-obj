module.exports = global.Class = function() { 
	function dump(obj){   
			console.log('--------------------------\n');  
	    var names="";       
	    for(var name in obj){       
	       names+=name+": "+obj[name]+", ";  
	    }  
	    console.log(names);  
	}  

	function cp(des, src) {
	    if (!des) {
	        des = {};
	    }
	    if (src) {
	        for (var i in src) {
	            des[i] = src[i];
	        }
	    }
	    return des;
	}

	function extend(obj, prop){    
		var o = this;
		// 对象集成	
		if(typeof obj == 'function'){
				obj.call(this);
				o = cp(this,obj.prototype)
		}
		return cp(o, prop);	
	}  

	function mo(arr){
		var before = function(){};
		for( var key in arr ){	
			var c = arr[key]
			before = extend(before ,c);
		}
		return before;
	}
		
	var o = [];
	for( var key in arguments ){	
		var c = arguments[key]
		o.push(c)
	}
	o.shift();
	
	var obj = mo(o);
	var src = arguments[arguments.length - 1];

	// console.log(obj);
	src.constructor.prototype = obj; 
	global[arguments[0]] = obj.constructor; 
	
}; 