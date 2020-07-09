$(document).ready(function(){
	// alert('hi');

	$("#main_navigation>ul>li>a").on("mouseover", function(){
		var num = $(this).parent().index();
		// console.log(num);
		var position = (num+1)*70;
		$(this).stop().css({
			'background-position': '0', position
		});
	});
});