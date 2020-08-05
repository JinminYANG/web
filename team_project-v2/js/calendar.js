$(document).ready(function(){
	// alert('hi');
	var totalData = $('.all_view>ul>li').length;
	// 총 데이터 수
	// console.log("totalData : " + totalData);

	var dataPerPage = 8;    
	// 한 페이지에 나타낼 데이터 수

	var pageCount = Math.ceil(totalData/dataPerPage); 
	// console.log(pageCount);      
	// 한 화면에 나타낼 페이지 수
	var count = $(".pagination>a>.pagenum").length;
	// console.log(count);

	var txt;

	if(count>pageCount){ //5>2
		for(var i=count; i>=pageCount; i--){
			$(".pagination>a>span").eq(i).remove('.pagenum');
			count = $(".pagination>a>.pagenum").length;
		}
		// console.log(count);
	}
	$('.all_list>.all_list_count>span>strong').text(totalData);
	
	$('.all_view>ul>li').stop().hide();
	// 첫 화면
	for(var i=0; i<dataPerPage; i++){
		$('.all_view>ul>li').stop().eq(i).show();
	}


	$('.pagination>a').eq(0).on('click', function(){
		$('.all_view>ul>li').stop().hide();
		$('.pagination>a').children('span').removeClass("currentpage");
		$('.pagination>a').eq(1).children('span').addClass("currentpage");
		for(var i=0; i<dataPerPage; i++){
			$('.all_view>ul>li').stop().eq(i).show();
		}
	});

	$('.pagination>a').eq(1).on('click', function(){
		txt = $('.pagination>a').eq(1).children('span').text();
		$('.pagination>a').children('span').removeClass("currentpage");
		$(this).children('span').addClass("currentpage");
		$('.all_view>ul>li').stop().hide();
		for(var i=0; i<dataPerPage; i++){
			// index(1 ~ 8)출력
			$('.all_view>ul>li').stop().eq((dataPerPage*(txt-1))+i).show();
			// $('.all_view>ul>li').stop().eq(i).show();
		}
	});

	// console.log($('.pagination>a').eq(2).children('span').text());
	if($('.pagination>a').eq(2).children('span').text()=='2'){
		$('.pagination>a').eq(2).on('click', function(){
			txt = $('.pagination>a').eq(2).children('span').text();
			$('.pagination>a').children('span').removeClass("currentpage");
			$(this).children('span').addClass("currentpage");
			$('.all_view>ul>li').stop().hide();
			for(var i=0; i<dataPerPage; i++){
	 			// index(9 ~ 16) 출력
	 			$('.all_view>ul>li').stop().eq((dataPerPage*(txt-1))+i).show();
	 			// $('.all_view>ul>li').stop().eq(dataPerPage+i).show();
	 		}
	 	});
	}
	// $('.pagination>a').eq(2).on('click', function(){
	// 	$('.pagination>a').children('span').removeClass("currentpage");
	// 	$(this).children('span').addClass("currentpage");
	// 	$('.all_view>ul>li').stop().hide();
	// 	for(var i=0; i<dataPerPage; i++){
	// 		$('.all_view>ul>li').stop().eq(dataPerPage+i).show();
	// 	}
	// });
	if($('.pagination>a').eq(3).children('span').text()=='3'){
		$('.pagination>a').eq(3).on('click', function(){
			txt = $('.pagination>a').eq(3).children('span').text();
	 		// console.log(txt);
	 		$('.pagination>a').children('span').removeClass("currentpage");
	 		$(this).children('span').addClass("currentpage");
	 		$('.all_view>ul>li').stop().hide();

	 		// index(17 ~ 24) 출력
	 		for(var i=0; i<dataPerPage; i++){
	 			$('.all_view>ul>li').stop().eq((dataPerPage*(txt-1))+i).show();
	 		}
	 	});
	}

	if($('.pagination>a').eq(4).children('span').text()=='4'){
		$('.pagination>a').eq(4).on('click', function(){
			txt = $('.pagination>a').eq(4).children('span').text();
	 		// console.log(txt);
	 		$('.pagination>a').children('span').removeClass("currentpage");
	 		$(this).children('span').addClass("currentpage");
	 		$('.all_view>ul>li').stop().hide();

	 		// ((dataPerPage*(text()-1)-1)+i)
	 		// 23~30 출력
	 		for(var i=0; i<dataPerPage; i++){
	 			$('.all_view>ul>li').stop().eq((dataPerPage*(txt-1))+i).show();
	 		}
	 	});
	}

	if($('.pagination>a').eq(5).children('span').text()=='5'){
		$('.pagination>a').eq(5).on('click', function(){
			txt = $('.pagination>a').eq(5).children('span').text();
	 		// console.log(txt);
	 		$('.pagination>a').children('span').removeClass("currentpage");
	 		$(this).children('span').addClass("currentpage");
	 		$('.all_view>ul>li').stop().hide();

	 		// ((dataPerPage*(text()-1)-1)+i)
	 		// 15~22 출력
	 		for(var i=0; i<dataPerPage; i++){
	 			$('.all_view>ul>li').stop().eq((dataPerPage*(txt-1))+i).show();
	 		}
	 	});
	}

	$('.pagination>a').last().on('click', function(){
		txt = $('.pagination>a').eq(count).children('span').text();
		$('.all_view>ul>li').stop().hide();
		$('.pagination>a').children('span').removeClass("currentpage");
		$('.pagination>a').eq(pageCount).children('span').addClass("currentpage");
		for(var i=0; i<dataPerPage; i++){
			$('.all_view>ul>li').stop().eq((dataPerPage*(txt-1))+i).show();
		}
	});

	
	// 달력 설정
	$.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd' //Input Display Format 변경
        ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        ,showMonthAfterYear: true //년도 먼저 나오고, 뒤에 월 표시
        ,changeYear: true //콤보박스에서 년 선택 가능
        ,changeMonth: true //콤보박스에서 월 선택 가능 
        ,buttonImage: "../img/btn_prevpage.png" // 버튼 이미지 *오류*           
        // ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
        // ,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
        // ,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
        // ,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
        // ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
        ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
        ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
        ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
        // ,minDate: "-1M" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        // ,maxDate: "+1M" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)             
    });

	$("#date_start").datepicker();
	$("#date_end").datepicker();

	$('#date_start').datepicker('setDate', 'today'); //오늘 날짜 나오게
	$('#date_end').datepicker('setDate', '+1M'); // 오늘기준 한달뒤 나오게
	console.log($( "#date_start" ).datepicker( "getDate" ));

	$("#theme").on("click", function(){
		$(".pop").stop().slideToggle(200, "linear");

		//전체선택 기능
		$(".pop input#ck1").on("click",function(){
        	//클릭되었으면
        	if($(".pop input#ck1").prop("checked")){
           		//input태그의 type이 checkbox인 태그들을 찾아서 checked옵션을 true로 정의
           		$(".pop input[type=checkbox]").prop("checked",true);
            //클릭이 안되있으면
        	}else{
            	//input태그의 type이 checkbox인 태그들을 찾아서 checked옵션을 false로 정의
            	$(".pop input[type=checkbox]").prop("checked",false);
        	}
        });

		$(".pop_select").on("click", function(){
			var test = [];
    		$(".pop input[type=checkbox]:checked").each(function() {
				test.push($(this).siblings("label").text());
			});

			//전체 선택 했을때 '전체'를 배열에서 제거
			if($(".pop input#ck1").is(":checked")==true){
				test.splice(0,1);
			}

			$("input#theme").prop("value", (test));
			$(this).parent().slideUp();
		});

		$(".pop_close").on("click", function(){
			$(this).parent().slideUp();
		});
	});

});