
module.exports = global.Class = function( ) { 
	this.version = "1.2.5";
	this.author = "i5ting@126.com";
	this.debug = false;
	
	this.log = function(t){
		if(this.debug == true)
			console.log(t);
	}
	this.dump = function(obj){   
			log('--------------------------\n');  
			if(typeof obj == 'string'){
				log('Class Name = '+obj + '\n');  
				return;
			}
	    var names="";       
	    for(var name in obj){       
	       names+=name+": "+obj[name]+", ";  
	    }  
	    log(names);  
	}  
	
	this.dumpn = function(str,obj){   
		log(str + '--------------------------\n');  
	  dump(obj)
	}  
	
	this.cp = function(des, src) {
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
	
	this.extend = function(obj, prop){
		var no_constructor = true;
		for( var key in prop ){	
			log('attr= ' +key);
			if(key == 'constructor'){
				no_constructor = false;
			}
		}
		
		if(no_constructor == true){
			var o = {
				constructor: function(){
					console.log('defalut constructor');
				}
			};
			this.cp(prop, o)
		}
		return this.cp(obj, prop);
	}

	function mo(arr){
		var before = function(){};
		for( var key in arr ){	
			var c = arr[key]
		   // dump(c);
			before = this.extend(before ,c);
		}
		return before;
	}
		
	var o = [];
	for( var key in arguments ){	
		var c = arguments[key]
		
	  dumpn(''+arguments[0] + ' step - ' + key,c);
		
		o.push(c)
	}
	o.shift();
	
	var obj = mo(o);
	dump(obj);
	var src = arguments[arguments.length - 1];
	
	src.constructor.prototype = obj; 
	global[arguments[0]] = obj.constructor;
	return this;
}; 
