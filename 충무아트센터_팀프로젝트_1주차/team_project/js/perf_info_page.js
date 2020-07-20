

$(document).ready(function(){
	var totalData = $('.perf_view>ul>li').length;
	 // 총 데이터 수
	// console.log("totalData : " + totalData);
	var dataPerPage = 8;    // 한 페이지에 나타낼 데이터 수
	var pageCount = Math.ceil(totalData/dataPerPage);        // 한 화면에 나타낼 페이지 수


	//리스트 초기 설정
	$('.perf_view>ul>li').stop().hide();
	for(var k=0; k<8; k++){
		$('.perf_view>ul>li').stop().eq(k).show();
	}

	function paging(totalData, dataPerPage, pageCount, currentPage){

		console.log("currentPage : " + currentPage);

    var totalPage = Math.ceil(totalData/dataPerPage);    // 총 페이지 수
    console.log("totalPage : " + totalPage);

    var pageGroup = Math.ceil(currentPage/pageCount);    // 페이지 그룹
    console.log("pageGroup : " + pageGroup);

    var last = pageGroup * pageCount;    // 화면에 보여질 마지막 페이지 번호
    if(last > totalPage)
    	last = totalPage;
    var first = last - (pageCount-1);    // 화면에 보여질 첫번째 페이지 번호
    var next = last+1;
    var prev = first-1;

    console.log("last : " + last);
    console.log("first : " + first);
    console.log("next : " + next);
    console.log("prev : " + prev);

    var $pingingView = $("#paging");

    var html = "";

    if(prev >= 0)
    	html += "<a href='#' id="+prev+ "> < </a>";

    for(var i=first; i <= last; i++){
    	html += "<a href='#' id=" + i + ">" + i + "</a> ";
    }

    if(next >= totalPage)
    	html += "<a href='#' id="+next+ "> > </a>";

	$("#paging").html(html);    // 페이지 목록 생성
	$("#paging a").css("color", "black");
	$("#paging a#" + currentPage).css({
		"text-decoration":"none", 
		"color":"red",
		"font-weight":"bold"
    });    // 현재 페이지 표시

	$("#paging a").on("click", function(){

		var $item = $(this);
		var $id = $item.attr("id");
		var selectedPage = $item.text();

		if($id == "next")
			selectedPage = next; // '>'

		if($id == "prev"){
			selectedPage = prev; // '<'
			perv();
		}

		paging(totalData, dataPerPage, pageCount, selectedPage);




		// for(var i=0; i<dataPerPage; i++){
		// 	if(selectedPage == 1){
		// 		$('.perf_view>ul>li').eq(dataPerPage*(selectedPage-1)+i).show();
		// 		$('.perf_view>ul>li').not(eq(dataPerPage*(selectedPage-1)+i)).hide(); //오류
		// 	}else if(selectedPage == 2){
		// 		$('.perf_view>ul>li').stop().eq(i).css({
		// 			'display':'none'
		// 		});
		// 		$('.perf_view>ul>li').eq(dataPerPage*(selectedPage-1)+i).show();
		// 	}
		// }
		function prev(){
			if(selectedPage==1){
				for(var i=0; i<dataPerPage; i++){
					$('.perf_view>ul>li').eq((dataPerPage)+i).hide();
					$('.perf_view>ul>li').eq(selectedPage*i).show();
				}
			}else if(selectedPage==2){
				for(var i=0; i<dataPerPage; i++){
					$('.perf_view>ul>li').eq((selectedPage-1)*i).hide();
					$('.perf_view>ul>li').eq(dataPerPage+i).show();
				}
			}
		}


		if(selectedPage==1){
			for(var i=0; i<dataPerPage; i++){
				$('.perf_view>ul>li').eq((dataPerPage)+i).hide();
				$('.perf_view>ul>li').eq(selectedPage*i).show();
			}
		}else if(selectedPage==2){
			for(var i=0; i<dataPerPage; i++){
				$('.perf_view>ul>li').eq((selectedPage-1)*i).hide();
				$('.perf_view>ul>li').eq(dataPerPage+i).show();
			}
		}


		// for(var k=0; k<totalData; k++){
		// 	if(k<dataPerPage){
		// 		for(var i=0; i<dataPerPage; i++){
		// 			$('.perf_view>ul>li').eq(i+dataPerPage).hide();
		// 			$('.perf_view>ul>li').eq(i).show();
		// 		}
		// 	}else if(k>dataPerPage){
		// 		$('.perf_view>ul>li').eq(k).hide(); 
		// 	}
		// }
	});

// $('.perf_view>ul>li').stop().hide(); 
// 전체 hide
// for(var k=0; k<8; k++){
// 	$('.perf_view>ul>li').stop().eq(k).show();
// }

}

paging(totalData, dataPerPage, pageCount, 1);
});