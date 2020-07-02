$(document).ready(function(){
	// alert('hi');
	var duration = 300; //0.3s


	$('#buttons1 button:nth-child(-n+4)').on("mouseover", function(){
		$(this).stop().animate({
			backgroundColor: "#ae5e9b",
			color: "#fff"
		}, duration);
	})
	.on("mouseout", function(){
		$(this).stop().animate({
			backgroundColor: "#fff",
			color: "#ebc000"
		}, duration);	
	});


	$('#buttons1 button:nth-child(n+5):nth-child(-n+8)').on("mouseover", function(){
		$(this).stop().animate({
			borderWidth:'12px',
			color: '#ae5e9b'
		}, duration, 'swing');
	})
	.on("mouseout", function(){
		$(this).stop().animate({
			borderWidth:'0px',
			color: '#ebc000'
		}, duration, 'swing');
	});


	$("#buttons1 button:nth-child(n+9)").on("mouseover", function(){
		$(this).find('> span').stop().animate({width: '100%'}, duration, 'swing');
	})
	.on("mouseout", function(){
		$(this).find('> span').stop().animate({
			width: '0%'
		}, duration, 'swing');
	});
	
});