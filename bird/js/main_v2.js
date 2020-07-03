$(document).ready(function(){
	// alert('hi');
	var duration = 300;

	var $images = $('#images p');

	$images.filter(':nth-child(1)').on("mouseover", function(){
		$(this).find('strong, span').stop().animate({opacity:1}, duration);
	})
	.on("mouseout", function(){
		$(this).find('strong, span').stop().animate({opacity:0}, duration);
	});


	$images.filter(':nth-child(2)').on("mouseover", function(){
		$(this).find('strong').stop().animate({opacity:1, left:'0%'}, duration);
		$(this).find('span').stop().animate({opacity:1}, duration);
			
	})
	.on("mouseout", function(){
		$(this).find('strong').stop().animate({opacity:0, left:"-100%"}, duration);
		$(this).find('span').stop().animate({opacity:0}, duration);
	});


	$images.filter(':nth-child(3)').on("mouseover", function(){
		$(this).find('strong').stop().animate({bottom:"0px", opacity:1}, duration);
		$(this).find('span').stop().animate({opacity:1}, duration);
		$(this).find('img').stop().animate({top:"-20px", height:"400px"}, duration *1.3);
	})
	.on("mouseout", function(){
		$(this).find('strong').stop().animate({bottom:"-70px", opacity:0}, duration);
		$(this).find('span').stop().animate({opacity:0}, duration);
		$(this).find('img').stop().animate({top:"0px"}, duration *1.3);
	})

});