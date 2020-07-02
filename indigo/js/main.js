$(document).ready(function(){
	// alert('hi');

	$(".menu-toggle-btn").on("click", function(){
		$(".gnb").stop().slideToggle(200, "linear");
	});
})