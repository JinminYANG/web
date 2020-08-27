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
    
    
    var $frm = $(".artists_list");
    //이미지클릭 기능
    $frm.on("submit", function(e){
        e.preventDefault();
        var myData = $frm.serialize();
        console.log(myData);
//        var $at = $(this).children("h2").text();
//        console.log($at);
        $.ajax({
            type: "post",
            url: $frm.attr("action"),
            data: myData,
            success: function(data){
                if(data){
                    console.log(data);
                    var jsonData = JSON.stringify(data,['ab_name','date']);
                    //  var jsonData = JSON.parse(data);
                    // console.log(data);
                    console.log(jsonData);
                    // console.log(jsonData2);
                    // console.log(jsonData[2]);

                    // var message = '<tr><td>'+jsonData.ab_name+'</td>' + '<td>' + jsonData.date + '</td></tr>';
                    var message = '<tr><td>'+jsonData.ab_name+'</td>' + '<td>' + jsonData.date + '</td></tr>';
                   // var message = jsonData;
//                    https://lovelydoll.tistory.com/63
                    var htmls = "";
//                    data.forEach(function(element,index,array){
//                         htmls += "<tr><td>" ;
//                    });
                    
                   console.log(message);
                   $(".list_table > tbody").html(message);
                    
                    $(".artists_view").fadeIn();
                    $(".close_btn").on("click", function(){
                        $(".artists_view").fadeOut();
                    });
                }
             }
        });   
    });
    
    
});