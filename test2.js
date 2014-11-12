var util = require("util");


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
	console.log('o='+o)
	return cp(o, prop);	
}  

function mo(){
	var before = function(){};
	for( var key in arguments ){	
		var c = arguments[key]
		before = extend(before ,c);
	}
	return before;
}

function log(str){
	console.log(str);
}

function main(){
	function base() {
	    this.member = " dnnsun_Member";
	    this.method = function() {
	        console.log(this.member);
	    }
	}
	
	// dump(new base);
	var b = new extend(base,{
		sang:function(){console.log('dddd');}
	});
	
	b.bp = function(){
		console.log('b.bp');
	}
	// dump(b.sang());
	base.prototype.bp = function(){
		console.log('bp invoke');
	}
	var a1 = mo(b,{dsdds:1},{
		aa:function(){
			console.log('aa in 1');
		}
	},{
		aa:function(){
			console.log('aa in 2');
			//todo 
			_super.aa();
		},
		bb:function(){
			console.log('bb in 2');
		}
	})
	
	log('**************** result **************\n');
	a1.aa();
	a1.bb();
	log(a1.dsdds);
	a1.sang();
	a1.bp();
	
	log(a1.member);

}

main();