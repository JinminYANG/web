$(document).ready(function(){
	// alert('hi');
	var totalData = $('.perf_view>ul>li').length;
	 // 총 데이터 수
	// console.log("totalData : " + totalData);

	var dataPerPage = 8;    
	// 한 페이지에 나타낼 데이터 수

	var pageCount = Math.ceil(totalData/dataPerPage); 
	// console.log(pageCount);      
	// 한 화면에 나타낼 페이지 수
	var count = $(".pagination>a>.pagenum").length;
	console.log(count);

	

	if(count>pageCount){ //5>2
		for(var i=count; i>=pageCount; i--){
			$(".pagination>a>span").eq(i).remove('.pagenum');
			count = $(".pagination>a>.pagenum").length;
		}
			console.log(count);
	}

	$('.perf_view>ul>li').stop().hide();
	// 첫 화면
	for(var i=0; i<dataPerPage; i++){
	 		$('.perf_view>ul>li').stop().eq(i).show();
	}


	 $('.pagination>a').eq(0).on('click', function(){
	 	$('.perf_view>ul>li').stop().hide();
	 	$('.pagination>a').children('span').removeClass("currentpage");
	 	$('.pagination>a').eq(1).children('span').addClass("currentpage");
	 	for(var i=0; i<dataPerPage; i++){
	 		$('.perf_view>ul>li').stop().eq(i).show();
	 	}
	 });
	 $('.pagination>a').eq(1).on('click', function(){
	 	$('.pagination>a').children('span').removeClass("currentpage");
	 	$(this).children('span').addClass("currentpage");
	 	$('.perf_view>ul>li').stop().hide();
	 	for(var i=0; i<dataPerPage; i++){
	 		$('.perf_view>ul>li').stop().eq(i).show();
	 	}
	 });
	 $('.pagination>a').eq(2).on('click', function(){
	 	$('.pagination>a').children('span').removeClass("currentpage");
	 	$(this).children('span').addClass("currentpage");
	 	$('.perf_view>ul>li').stop().hide();
	 	for(var i=0; i<dataPerPage; i++){
	 		$('.perf_view>ul>li').stop().eq(dataPerPage+i).show();
	 	}
	 });
	 $('.pagination>a').last().on('click', function(){
	 	$('.perf_view>ul>li').stop().hide();
	 	$('.pagination>a').children('span').removeClass("currentpage");
	 	$('.pagination>a').eq(pageCount).children('span').addClass("currentpage");
	 	for(var i=0; i<dataPerPage; i++){
	 		$('.perf_view>ul>li').stop().eq(dataPerPage+i).show();
	 	}
	 });


	});