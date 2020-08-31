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

function submitForm1() {
    var form = document.forms['test_form'];
    form.action = 'artists-v2.php';
    form.submit();
}

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
//            dataType: "json",
            data: myData,
            success: function(data){
                if(data){
                    
                    console.log(data);
                    var jsonData = JSON.stringify(data,['ab_name','date']);
                    console.log(jsonData);

//                      var jsonData = JSON.parse(data);
                    // console.log(data);
                    https://ilbbang.tistory.com/entry/mysql-DB-%EB%82%B4%EC%9A%A9%EC%9D%84-php%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-json-%ED%98%95%EC%8B%9D%EC%9C%BC%EB%A1%9C-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0
                    var data1 = JSON.parse(jsonData);
                    console.log(data1);

//                    console.log(data[0].ab_name);
//                    console.log(data1[0].ab_name);

//                    console.log(jsonData[0].ab_name);

                    // console.log(jsonData2);
                    // console.log(jsonData[2]);

                    // var message = '<tr><td>'+jsonData.ab_name+'</td>' + '<td>' + jsonData.date + '</td></tr>';
                    // var message = '<tr><td>'+jsonData.ab_name+'</td>' + '<td>' + jsonData.date + '</td></tr>';
                   // var message = jsonData;
//                    https://lovelydoll.tistory.com/63
//                     var htmls = "";
//                    data.forEach(function(element,index,array){
//                         htmls += "<tr><td>" ;
//                    });
                    
                   // console.log(message);
                   $(".list_table > tbody").html(data1);
                    
                    $(".artists_view").fadeIn();
                    $(".close_btn").on("click", function(){
                        $(".artists_view").fadeOut();
                    });
                }
             }
        });   
    });
    
    
});