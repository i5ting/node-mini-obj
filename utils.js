global.mini_dump = function (obj){   
		console.log('--------------------------\n');  
    var names="";       
    for(var name in obj){       
       names+=name+": "+obj[name]+", ";  
    }  
    console.log(names);  
}  

global.mini_cp = function(des, src) {
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

global.mini_extend = function(obj, prop){    
	var o =  function(){};
	//dump(o);
	// 对象集成	
	if(typeof obj == 'function'){
			// obj.call(this);
			dump(obj.prototype);
			o = cp(o,obj.prototype)
	}
	return cp(o, prop);	
}  
