// JavaScript Document
// jQuery 1.8.2 plug-in
// Author:李俊 长大在线
// set point by star
;(function($){
	/*code here*/

	$.fn.extend({
		"star":function(point,fun){
			//分数为point,开始初始化
			//1. 创建5个<li>标签,并初始化
			var dat;
			var init_data=["0px 17px","0px 17px","0px 17px","0px 17px","0px 17px"];
			for(var init=0;init<point;init++){
				init_data[init]="0px 0px";
				}
				
			var picurl="../img/star.png";
			var html='<li style="left:0px;position: absolute;width: 18px;height: 17px;list-style: none;background: url('+picurl+');background-position:'+init_data[0]+';"></li><li style="left:18px;position: absolute;width: 18px;height: 17px;list-style: none;background: url('+picurl+');background-position:'+init_data[1]+';"></li><li style="left:36px;position: absolute;width: 18px;height: 17px;list-style: none;background: url('+picurl+');background-position:'+init_data[2]+';" ></li><li style="left:54px;position: absolute;width: 18px;height: 17px;list-style: none;background: url('+picurl+');background-position:'+init_data[3]+';" ></li><li style="left:72px;position: absolute;width: 18px;height: 17px;list-style: none;background: url('+picurl+');background-position:'+init_data[4]+';" ></li>';
			this.append(html);//this指的是当前jQuery对象
			
			//事件挂钩
			var liEleArray=this.children("li");//获取刚生成的li元素数组
			this.mouseout(function(e) {
                for(var r=0;r<5;r++){
					$(liEleArray[r]).css("background-position",init_data[r]);
					}
            });
			for(var i=0;i<5;i++){
					$(liEleArray[i]).data("data",i+1);//数据绑定
					$(liEleArray[i]).mouseover(function(e) {//mouseover事件
						$(this).nextAll().css("background-position","0px 17px");//清除滞留
						$(this).css("background-position","0px 0px");
						$(this).prevAll().css("background-position","0px 0px");
						
					});
					$(liEleArray[i]).mouseout(function(e) {//mouseout事件
						$(this).css("background-position","0px 17px");
						$(this).prevAll().css("background-position","0px 17px");
					});
					$(liEleArray[i]).click(function(e) {//click事件
						dat=$(this).data("data");//赋值
						//click事件执行fun函数
						/*Run fun*/fun(dat);//将上面的dat作为实参传入fun
						//移除mouseover,mouseout,click事件
						liEleArray.unbind("mouseover");
						liEleArray.unbind("mouseout");
						liEleArray.unbind("click");
						
					});
				}
			
			return this;//返回当前jQuery保持jQuery的连贯性
			}
		});
})(jQuery);