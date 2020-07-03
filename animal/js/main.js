$(document).ready(function(){
	// alert('hi');

	$(".bts>button").on("mouseover", function(){
		var index = $(this).index(); 
		console.log(index);
		$(this).eq(index).stop().children('img').attr("src",'images/bird_green_txt.png');
		$(this).stop().animate({
			backgroundColor:"yellow"
		});

	})
	.on("mouseout", function(){
		$(this).stop().animate({
			backgroundColor:"white"
		});
	});	


});