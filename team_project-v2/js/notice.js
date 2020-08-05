$(document).ready(function(){

	$(".notice_section>li>a").on("click", function(){
		var $idx = $(this).parent().index();
		console.log($idx);

		$(this).parents().siblings().children("a").removeClass("active");
		$(this).addClass("active");


		if($idx==0){
			$(".notice").removeClass("active");
			$(".notice_all").addClass("active");
		}else if($idx==1){
			$(".notice").removeClass("active");
			$(".notice_notice").addClass("active");
		}else if($idx==2){
			$(".notice").removeClass("active");
			$(".notice_hire").addClass("active");
		}else if($idx==3){
			$(".notice").removeClass("active");
			$(".notice_bidding").addClass("active");
		}else if($idx==4){
			$(".notice").removeClass("active");
			$(".notice_public").addClass("active");
		}
	});
});