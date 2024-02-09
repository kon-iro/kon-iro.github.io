//Twitterのアレ
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

$(document).ready(function() {
	 $("#owl-demo").owlCarousel({
		navigation : false,
		slideSpeed : 700,
		paginationSpeed : 1500,
		rewindSpeed : 2000,
		autoPlay : true,
		singleItem:true,
		responsive: true,
	  });
});

//アニメーションするやつ
wow = new WOW(
{
	  animateClass: 'animated',
	  mobile: false,
	  offset: 100
	}
);
wow.init();

//トップメニュー
$(function(){
	$('a[href^=#]').click(function(){
	var speed = 1000;
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;
	$("html, body").animate({scrollTop:position}, speed, "swing");
	return false;
	});
});

//右下のボタン
$(function(){
	$('#pagetop').hide();
	$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('#pagetop').fadeIn();
	}
	else {
		$('#pagetop').fadeOut();
	}
});
 
$('#pagetop').click(function(){
	$('html,body').animate({
		scrollTop: 0
	}, 300);
	return false;
	});
});