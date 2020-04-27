// 주메뉴
var $devWidth;
var $limitSize=768;

$(document).ready(function(){
	// alert("안녕하세요");

	// 디바이스 사이즈 체크
	$devWidth=$("body").width();
	$(window).resize(function(){ //.resize (창의 크기 조절용도)
		 $devWidth=$("body").width();
	});
	// *메인메뉴* id="gnb"
	$(".gnblist > li > a").bind("mouseover focus", function(){
		if ($devWidth < $limitSize){ // 767 < 768
			return false;
		}
		// 768이상의 디바이스의 경우에 해당
		// $(".gnblist a").next().show(); //.gnblist a의 형제인 ul을 보여준다
		$(".gnblist ul").hide();
		$(this).next().show(); //this를 하면 a의 ul이 하나하나 보여줌
		$(".gnblist > li > a").css({'height':'39px','background':'none'});
		$(this).css('height','32px');
		$(this).css('background','url("images/over_icon.gif") no-repeat center bottom');
		$("#gnb").mouseleave(function(){
			if($devWidth < $limitSize){
				return false;
			}
			$(".gnblist ul").stop().slideUp(100);
			$(".gnblist > li > a").css({'height':'29px','background':'none'});
		});
	});

	// *전체메뉴* id="allmenu_view"
	$(".allmenu_view a").click(function(e){ //e는 event의 약자
		e.preventDefault(); // 이벤트 효과를 막는 기능 (url을 찾아가는 기본속성제거)
		// $(".allmenu_view").slideUp(1000);
		// $("#allMenu_box").slideDown("slow");
		$(".allmenu_view").slideUp(1000,function(){
			$("#allMenu_box").slideDown("slow");
		});
	});
	$(".all_close").click(function(e){
		e.preventDefault();
		// $("#allMenu_box").slideUp(200);
		// $(".allmenu_view").slideDown(200);
		$("#allMenu_box").slideUp("slow",function(){
			$(".allmenu_view").slideDown(1000);
		});
	});

	// *click&touch 슬라이드배너*
	var $bnnNum=0;
	$(".next").click(function(){
		if($bnnNum>=1){ //1보다 클경우
			return false; //return으로 함수를 반환시킨다.
		}
		$bnnNum++; //1
		$book_w=$("#recomm_book").width(); //#recomm_book의 width를 가져온다.
		$("#book_frame").animate({left:-$book_w},300,function(){
			$("#book_roll img").attr("src","images/state_out.gif"); //img가 2개이니 전부 다 img를 변경해줌
			$("#book_roll img").eq($bnnNum).attr("src","images/state_over.gif");
		}); //#book_frame의 left를 이동시킨다. 

		// $("#book_roll img").attr("src","images/state_out.gif"); //#book_roll의 img의 속성을 대체시킨다.
		// $("#book_roll img").eq($bnnNum).attr("src","images/state_over.gif");
	});
	$(".prev").click(function(){
		if($bnnNum<=0){ //0보다 작을 경우
			return false;
		}
		$bnnNum--; //0
		$book_w=$("#recomm_book").width();
		$("#book_frame").animate({left:-$book_w*$bnnNum},300,function(){ // left에 *$bnnNum을 해줌으로써 0을 곱해줌
			$("#book_roll img").attr("src","images/state_out.gif");
			$("#book_roll img").eq($bnnNum).attr("src","images/state_over.gif");
		});
	});
	// *기준이 왼쪽 (left:0px)*
	// bookframe에서 (왼쪽인상태) 오른쪽 버튼을 누르면 left:-1003px;
	// 오른쪽인 상태에서 왼쪽을 누르면 left:0px;
	// 왼쪽인 상태에서 왼쪽을 누르면 반응 X
	// 오른쪽인 상태에서 오른쪽을 누르면 반응 X

	// *탭메뉴*
	$(".t1 a, .t2 a").bind("click focus",function(e){
		e.preventDefault();
		$(".item1, .item2").hide();
		$(this).parent().next().show();

		// each()를 사용하면 이벤트가 동작하는 위치가 아닌 each앞에있는 애를 찾아감
		$("#newbooks-news h2 img").each(function(){ 
			// .attr(속성, 속성값)
			$(this).attr("src",$(this).attr("src").replace("_over.gif",".gif"));
		});
		$btn_img=$(this).children("img");
		$btn_img.attr("src",$btn_img.attr("src").replace(".gif","_over.gif"));
	});
});