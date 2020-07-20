$(document).ready(function(){
	// alert('hi');
	var totalData = $('.perf_view>ul>li').length;
	 // 총 데이터 수
	// console.log("totalData : " + totalData);

	var dataPerPage = 8;    
	// 한 페이지에 나타낼 데이터 수

	var pageCount = Math.ceil(totalData/dataPerPage);       
	 // 한 화면에 나타낼 페이지 수

	 $('.pagination>a:nth-of-type(0)').on('click', function(){
	 	for(var i=0; i<dataPerPage; i++){
	 		$('perf_list>ul>li').stop().eq(i).show();
	 	}
	 });


	});