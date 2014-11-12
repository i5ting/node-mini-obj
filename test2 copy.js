var util = require("util");

var b;
function base() {
    this.member = " dnnsun_Member";
    this.method = function() {
        console.log(this.member);
    }
}

function base2(obj, prop) {
	obj.call(this);
}

base.prototype.aa = function(){
	
}

function displayProp(obj){    
    var names="";       
    for(var name in obj){       
       names+=name+": "+obj[name]+", ";  
    }  
    console.log(names);  
}  


/**
 * 复制src对象属性到des对象中,des对象中相同名称的属性被覆盖.
 * @param {Object} dest 目标对象
 * @param {Object} src  源对象
 * @returns 如果des为空,返回src属性副本,否则返回des
 */
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

function extend(obj){    
  var b = new base();
	return cp(b, obj);
}  

function a(){
	var b = new base();
	displayProp(b);
	
	var c = extend({
		jllkl:function(){
			console.log('dddd');
		}
	});
	
	displayProp(c);
	// console.log(base.prototype);
}


a();

// function extend(baseObj, ppt) {
//     var attr = null;
//     for (attr in base.prototype) {
//         //复制每个基类的prototype成员
//         base.prototype[attr] = baseObj.prototype[attr];
//     }
//
//     for (attr in ppt) {
//         if (base.prototype[attr] != null) {
//             //发现同名方法，重载
//             var fold = this.prototype[attr];   //旧方法
//             var fnew = ppt[attr];   //新的重载方法
//             fnew.base = fold;  //附加base属性
//             base.prototype[attr] = fnew; //重载
//         }
//         else {
//             //添加
//             base.prototype[attr] = ppt[attr];
//         }
//     }
// };
//
// var i = new base2(base, {
// 	a:function(){
// 		console.log('....');
// 	}
// });
//
// base.prototype.aa = function(){}
//
// console.log(base.prototype);
// console.log(i.member)
//
//
//
//
//
//






// var util = require("util");
//
//
// var extend = require("extend");
//
//
// function _inherit( props) {
// 	var base =  function(){}
//
// 	console.log(	base.prototype);
//
//   if (props) {
//       for(var p in props) {
// 				console.log(p);
//           if (props.hasOwnProperty(p)) {
//               base.prototype[p] = props[p];
//           }
//       }
//   }
//
// 	return base;
// };
//
// var b = _inherit({
// 	say:function(){
// 		console.log('base hello ' + this.name);
// 	}
// });
// util.inherits(b);
// //
// // b.say();
