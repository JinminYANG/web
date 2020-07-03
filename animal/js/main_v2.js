$(document).ready(function(){
	// alert('hi');
	var duration = 300;

	$("#buttons2 button").each(function(index){
		var pos = index * 50 - 50;
		$(this).css('top', pos);
	});


	$("#buttons2 button").on("mouseover", function(){
		var $btn = $(this).stop().animate({
			backgroundColor : "#52d544",
			color: "#000"
		}, duration);

		$btn.find("img:first-child").stop().animate({
			opacity: 0
		}, duration);
		$btn.find("img:nth-child(2)").stop().animate({
			opacity: 1
		}, duration);
	})
	.on("mouseout", function(){
		var $btn = $(this).stop().animate({
			backgroundColor : "#fff",
			color: "#52d544"
		}, duration);

		$btn.find("img:first-child").stop().animate({
			opacity: 1
		}, duration);
		$btn.find("img:nth-child(2)").stop().animate({
			opacity: 0
		}, duration);
	});

});