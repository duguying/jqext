// JavaScript Document
// jQuery 1.8.2 plug-in
// Author:李俊 长大在线
// shake icon, not support ie
;(function($){
	/*code here*/

	$.fn.extend({
		"shake":function(ele) {
			$("body").append("<style>.r1{-moz-transform:rotate(-3deg);-webkit-transform:rotate(-3deg);-o-transform:rotate(-3deg);}.r2{-moz-transform:rotate(2deg);-webkit-transform:rotate(2deg);-o-transform:rotate(2deg);}</style>");
			var elem=$(ele);
			var ele_mark=Math.random();
			var ani_t1,ani_t2;
			var state1=function (){
				elem.removeClass("r2"); 
				elem.addClass("r1");
				ani_t1=setTimeout(state2,90);
		 	}
			var state2=function (){	   
			     elem.removeClass("r1");
			     elem.addClass("r2"); 
				 ani_t2=setTimeout(state1,90);
			}

			elem.hover(function(){
				state1();
			},function(){
				window.clearTimeout(ani_t1);
				window.clearTimeout(ani_t2);
			});
			return this;
		}
	});
})(jQuery);