$(document).ready(function(){

	$('body').css({"width":document.documentElement.clientWidth+"px"});
	$('body').css({"height":document.documentElement.clientHeight+"px"});
	$('.left_bottom_a2').click(function(){
		$('.cover').css({"display":"block"});
		$('.cover_pic').css({"display":"block"})
	});
	$('.cover').click(function(){
		$('.cover').css({"display":"none"});
		$('.cover_pic').css({"display":"none"})
	})
	$('.left_bottom_list div').each(function(i){
		
		$(this).click(function(i){
			if($('.right_div div').eq($(this).index()).is(":animated")){
				$('.right_div div').stop(true,true);
			}
			$('.right_div div').eq($(this).index()).css({"zIndex":"1"}).animate({"left":"0"},2000).siblings().css({"zIndex":"0"}).animate({"left":100+"%"},2000);
		})
	})
})
