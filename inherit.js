if(window.__debug === undefined){
	var __debug = false;
}



var inherits = function (Child, Parent) {
    for (var i in Parent.prototype) {
        if (Child.prototype[i]) {
            continue;
        }
        Child.prototype[i] = Parent.prototype[i];
    }
};

function extend(des, src) { 
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

/** 
 * 将原对象所有属性复制到目标对象中,如果目标对象存在该属性,并不进行覆盖. 
 * 该方法是用for..in..遍历对象属性的. 
 * @param {Object} des 目标对象 
 * @param {Object} src 源对象 
 * @see CC.extend 
 * @returns {Object} 返回目标对象,如果目标为空,返回一个新对象 
 */  
function extendIf(des, src) {  
  if(!des)  
    des = {};  
  
  if(src)  
    for(var i in src){  
      if(des[i] === undefined)  
        des[i] = src[i];  
    }  
  
  return des;  
},  
