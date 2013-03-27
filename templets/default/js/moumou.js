// JavaScript Document$(function(){
$(document).ready(function() {
/*
//$(".src .src1").scrollable({size:1,items:".src .src1 ul",loop:true,prev:".pre",next:".next"}).autoscroll({ autoplay: true,interval:4000 });
$(".demo .src4").scrollable({size:1,items:".demo .src4 ul",loop:true}).autoscroll({ autoplay: true,interval:4000 });
$(".name .name1").scrollable({size:1,items:".name .name1 ul",loop:true,prev:".ak",next:".mk"}).autoscroll({ autoplay: true,interval:4000 });
$(".src8 .src9").scrollable({size:1,items:".src8 .src9 ul",loop:true,prev:".ps",next:".pl"}).autoscroll({ autoplay: true,interval:4000 });

$("#chained2").scrollable({size:3,items:"#chained2 ul",loop:true}).autoscroll({ autoplay: true,interval:4000 }).navigator({navi:".nv2",naviItem:"dd",activeClass:"current"});
$("#chained3").scrollable({size:5,items:"#chained3 ul",loop:true}).autoscroll({ autoplay: true,interval:4000 }).navigator({navi:".nv3",naviItem:"dd",activeClass:"current"});

$(".hot_service ul").tabs(".hot_big > div", {effect: 'fade',loop:true,fadeOutSpeed: "fast",rotate: true});
$(".map ul").tabs(".src3 > div", {loop:true,rotate: true}).slideshow({autoplay:true,interval: 3000});
$(".wish ul").tabs(".src7 > div", {effect: 'fade',loop:true,fadeOutSpeed: "fast",rotate: true});

$(".fick1 ul").tabs(".us > div", {effect: 'fade',loop:true,fadeOutSpeed: "fast",rotate: true}).slideshow({autoplay:true,interval: 3000});
$(".fick1 .us").tabs(".fick2 > span", {effect: 'fade',loop:true,fadeOutSpeed: "fast",rotate: true,event:"mouseover"}).slideshow({autoplay:true,interval: 3000});


$(".nav a").not(".nav a.hover").hover(function(){$(this).find("div").stop().animate({top:"2px"},300)},function(){$(this).find("div").stop().animate({top:"-36px"},400)});
//$("#chained").scrollable({size:5,items:"#chained ul",loop:true}).autoscroll({ autoplay: true,interval:4000 }).navigator({navi:".nv",naviItem:"dd",activeClass:"current"});
$(".ln_src02 ul").tabs(".ln_src01 > div", {effect: 'fade',loop:true,fadeOutSpeed: "fast",loop:true,rotate: true}).slideshow({autoplay:true,interval: 3000});
$(".ln_src2 ul").tabs(".ln_src > div", {effect: 'fade',loop:true,fadeOutSpeed: "fast",loop:true,rotate: true}).slideshow({autoplay:true,interval: 3000});
$(".ln_src04 ul").tabs(".ln_src03 > div", {effect: 'fade',loop:true,fadeOutSpeed: "fast",loop:true,rotate: true}).slideshow({autoplay:true,interval: 3000});
$(".ln_src06 ul").tabs(".ln_src05 > div", {effect: 'fade',loop:true,fadeOutSpeed: "fast",loop:true,rotate: true}).slideshow({autoplay:true,interval: 3000});

*/

$("a.np,a.kp,a.np,a.kp,a.ps,a.pl,a.sk1,a.sk2,a.ak,a.mk,a.ln_arrow01,a.ln_arrow02").click(function(){return false});

$(".fick1 ul").tabs(".us > div", {effect: 'fade',loop:true,fadeOutSpeed: "fast",rotate: true}).slideshow({autoplay:true,interval: 3000});



	$("#nav li").hover(function(){
		$(this).find(".sp").addClass("wp");
	},function(){
		$("#nav li .sp").removeClass("wp")
	});
	
	

});


function do_goTop(acceleration, time) {
	window.scrollTo(0);
	/*
        acceleration = acceleration || 0.1;
        time = time || 1;

        var x1 = 0;
        var y1 = 0;
        var x2 = 0;
        var y2 = 0;
        var x3 = 0;
        var y3 = 0;

        if (document.documentElement) {
                x1 = document.documentElement.scrollLeft || 0;
                y1 = document.documentElement.scrollTop || 0;
        }
        if (document.body) {
                x2 = document.body.scrollLeft || 0;
                y2 = document.body.scrollTop || 0;
        }
        var x3 = window.scrollX || 0;
        var y3 = window.scrollY || 0;

        // 滚动条到页面顶部的水平距离
        var x = Math.max(x1, Math.max(x2, x3));
        // 滚动条到页面顶部的垂直距离
        var y = Math.max(y1, Math.max(y2, y3));

        // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
        var speed = 1 + acceleration;
        window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));

        // 如果距离不为零, 继续调用迭代本函数
        if(x > 0 || y > 0) {
                var invokeFunction = "do_goTop(" + acceleration + ", " + time + ")";
                window.setTimeout(invokeFunction, time);
        }
	*/
}




/*
// 跟随滚动条滚动代码开始
var t="";
//$(window).scroll(function(){ t = setTimeout(function(){goTop();},200); });
$(window).scroll(function(){$(".scrollgif").stop().animate({opacity: '0'},0); $(".scrollgif").css({"display":"none"}); t = setTimeout(function(){goTop();},300); });

function goTop(){
	clearTimeout(t);
	 $(".scrollgif").css({"display":"block"});
	var elePos = 280;
	var footer_height = 160;

	
	if($(window).height()+$(window).scrollTop()+footer_height > $(document).height()){
		var endPos = $(document).height() - elePos - footer_height;
	} else {
		var endPos = $(window).height()+$(window).scrollTop()- elePos;
	}
	
	
	$(".scrollgif").css({"top":endPos});
	//$(".scrollgif").css({"display":"none"});
	
	
	//alert($(".scrollgif").css("opacity"));
	if($(".scrollgif").css("opacity") == 1){
		//
	}
	$(".scrollgif").animate({opacity: '1'},800);
}
*/
$(document).ready(function() {
	if($.browser.version == "6.0"){
	} else {
		$(".scrollgif").css({"left":($(window).width()/2+964/2)+"px"});
	}
	
	
	$(window).scroll(function(){
		
		if($.browser.version == "6.0"){
			var elePos = 280;
			var footer_height = 160;

			
			if($(window).height()+$(window).scrollTop()+footer_height > $(document).height()){
				var endPos = $(document).height() - elePos - footer_height;
			} else {
				var endPos = $(window).height()+$(window).scrollTop()- elePos;
			}
			$(".scrollgif").css({"top":endPos});
		}
		
		if($(window).scrollTop() >0){
			$(".scrollgif").css("display","block");
		} else {
			$(".scrollgif").css("display","none");
		}
	});	
	
});