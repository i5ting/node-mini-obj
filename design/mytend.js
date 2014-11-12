function base() {
    this.member = " dnnsun_Member";
    this.method = function() {
        console.log(this.member);
    }
}
function extend(ppt) {
    // base.call(this);
		base = "(arguments.callee.base.apply(this, arguments))";
    // console.log(member);
		// this.method();
    // console.log(this.method);
		
    var attr = null;
    // for (attr in base.prototype) {
    //     //复制每个基类的prototype成员
    //     this.prototype[attr] = base.prototype[attr];
    // }

    for (attr in ppt) {
        // if (this.prototype[attr] != null) {
    //         //发现同名方法，重载
    //         var fold = this.prototype[attr];   //旧方法
    //         var fnew = ppt[attr];   //新的重载方法
    //         fnew.base = fold;  //附加base属性
    //         this.prototype[attr] = fnew; //重载
    //     }
    //     else {
            //添加
            this.prototype[attr] = ppt[attr];
        // }
    }
}


var o = new base();

extend({
	method : function() {
	        console.log(this);
	    }
});