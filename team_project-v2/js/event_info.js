$(document).ready(function(){
	// alert('hi');
	var totalData = $('.event_view>ul>li').length;
	 // 총 데이터 수
	// console.log("totalData : " + totalData);

	var dataPerPage = 8;    
	// 한 페이지에 나타낼 데이터 수

	// var pageCount = Math.ceil(totalData/dataPerPage); 
	// console.log(pageCount);      
	// 한 화면에 나타낼 페이지 수
	// var count = $(".pagination>a>.pagenum").length;
	// console.log(count);

	// var txt;

	// if(count>pageCount){ //5>2
	// 	for(var i=count; i>=pageCount; i--){
	// 		$(".pagination>a>span").eq(i).remove('.pagenum');
	// 		count = $(".pagination>a>.pagenum").length;
	// 	}
	// 	// console.log(count);
	// }
	
	$('.event_list>.event_list_count>span>strong').text(totalData);
	
	$('.event_view>ul>li').stop().hide();
	// 첫 화면
	for(var i=0; i<dataPerPage; i++){
		$('.event_view>ul>li').stop().eq(i).show();
	}


	// $('.pagination>a').eq(0).on('click', function(){
	// 	$('.event_view>ul>li').stop().hide();
	// 	$('.pagination>a').children('span').removeClass("currentpage");
	// 	$('.pagination>a').eq(1).children('span').addClass("currentpage");
	// 	for(var i=0; i<dataPerPage; i++){
	// 		$('.event_view>ul>li').stop().eq(i).show();
	// 	}
	// });

	// $('.pagination>a').eq(1).on('click', function(){
	// 	txt = $('.pagination>a').eq(1).children('span').text();
	// 	$('.pagination>a').children('span').removeClass("currentpage");
	// 	$(this).children('span').addClass("currentpage");
	// 	$('.event_view>ul>li').stop().hide();
	// 	for(var i=0; i<dataPerPage; i++){
	// 		// index(1 ~ 8)출력
	// 		$('.event_view>ul>li').stop().eq((dataPerPage*(txt-1))+i).show();
	// 		// $('.event_view>ul>li').stop().eq(i).show();
	// 	}
	// });

	// console.log($('.pagination>a').eq(2).children('span').text());
	// if($('.pagination>a').eq(2).children('span').text()=='2'){
	//  	$('.pagination>a').eq(2).on('click', function(){
	//  		txt = $('.pagination>a').eq(2).children('span').text();
	//  		$('.pagination>a').children('span').removeClass("currentpage");
	//  		$(this).children('span').addClass("currentpage");
	//  		$('.event_view>ul>li').stop().hide();
	//  		for(var i=0; i<dataPerPage; i++){
	//  			// index(9 ~ 16) 출력
	//  			$('.event_view>ul>li').stop().eq((dataPerPage*(txt-1))+i).show();
	//  			// $('.event_view>ul>li').stop().eq(dataPerPage+i).show();
	//  		}
	//  	});
	// }

	 // $('.pagination>a').eq(2).on('click', function(){
	 // 	$('.pagination>a').children('span').removeClass("currentpage");
	 // 	$(this).children('span').addClass("currentpage");
	 // 	$('.event_view>ul>li').stop().hide();
	 // 	for(var i=0; i<dataPerPage; i++){
	 // 		$('.event_view>ul>li').stop().eq(dataPerPage+i).show();
	 // 	}
	 // });

	// if($('.pagination>a').eq(3).children('span').text()=='3'){
	//  	$('.pagination>a').eq(3).on('click', function(){
	//  		txt = $('.pagination>a').eq(3).children('span').text();
	//  		// console.log(txt);
	//  		$('.pagination>a').children('span').removeClass("currentpage");
	//  		$(this).children('span').addClass("currentpage");
	//  		$('.event_view>ul>li').stop().hide();

	//  		// index(17 ~ 24) 출력
	//  		for(var i=0; i<dataPerPage; i++){
	//  			$('.event_view>ul>li').stop().eq((dataPerPage*(txt-1))+i).show();
	//  		}
	//  	});
	// }

	// if($('.pagination>a').eq(4).children('span').text()=='4'){
	//  	$('.pagination>a').eq(4).on('click', function(){
	//  		txt = $('.pagination>a').eq(4).children('span').text();
	//  		// console.log(txt);
	//  		$('.pagination>a').children('span').removeClass("currentpage");
	//  		$(this).children('span').addClass("currentpage");
	//  		$('.event_view>ul>li').stop().hide();

	//  		// ((dataPerPage*(text()-1)-1)+i)
	//  		// 23~30 출력
	//  		for(var i=0; i<dataPerPage; i++){
	//  			$('.event_view>ul>li').stop().eq((dataPerPage*(txt-1))+i).show();
	//  		}
	//  	});
	// }

	// if($('.pagination>a').eq(5).children('span').text()=='5'){
	//  	$('.pagination>a').eq(5).on('click', function(){
	//  		txt = $('.pagination>a').eq(5).children('span').text();
	//  		// console.log(txt);
	//  		$('.pagination>a').children('span').removeClass("currentpage");
	//  		$(this).children('span').addClass("currentpage");
	//  		$('.event_view>ul>li').stop().hide();

	//  		// ((dataPerPage*(text()-1)-1)+i)
	//  		// 15~22 출력
	//  		for(var i=0; i<dataPerPage; i++){
	//  			$('.event_view>ul>li').stop().eq((dataPerPage*(txt-1))+i).show();
	//  		}
	//  	});
	// }

	// $('.pagination>a').last().on('click', function(){
	//  	txt = $('.pagination>a').eq(count).children('span').text();
	//  	$('.event_view>ul>li').stop().hide();
	//  	$('.pagination>a').children('span').removeClass("currentpage");
	//  	$('.pagination>a').eq(pageCount).children('span').addClass("currentpage");
	//  	for(var i=0; i<dataPerPage; i++){
	//  		$('.event_view>ul>li').stop().eq((dataPerPage*(txt-1))+i).show();
	//  	}
	// });


	});