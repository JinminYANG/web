function sub(){
	var sub = document.getElementsByClassName("artists_view"),
	sc_wid = screen.availWidth;
	sc_hei = screen.availHeight;
//	console.log(sc_wid, sc_hei);
	sub.width = sc_wid;
	sub.hei = sc_hei;
//	console.log(sub);
//	console.log(sub.width, sub.hei);
}
sub();


$(document).ready(function(){
	// alert('hi');
	
	var numAc = $('.list').size(); // article 개수

	//스크롤 제어
	$(window).on("scroll",function(){
		var scroll = $(this).scrollTop();
		$(".artists_list").stop().animate({'left':-scroll}, 100);
	});

	var $win_width = $(window).height;
	$(".sub").css({'width' : $win_width});
    
    
    
    //이미지클릭 기능
    $(".list").on("click", function(){
        $(".artists_view").fadeIn();
        $(".close_btn").on("click", function(){
            $(".artists_view").fadeOut();
        });
        
    });
    
});