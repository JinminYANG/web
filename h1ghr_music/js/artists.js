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

// function submitForm1() {
//     var form = document.forms['test_form'];
//     form.action = 'artists-v2.php';
//     form.submit();
// }

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
    
    
    var $frm = $(".artists_list1");
    //이미지클릭 기능
    $frm.on("submit", function(e){
        e.preventDefault();
        var myData = $frm.serialize();
        console.log(myData);
        $.ajax({
            type: "post",
            url: $frm.attr("action"),
            data: myData,
            success: function(data){
                if(data){
                    console.log(data);
                    var jsonData = JSON.stringify(data,['ab_name','date']);
                    console.log(jsonData);

                    var data1 = JSON.parse(jsonData);
                    console.log(data1);

                    $(".list_table > tbody").html(data1);
                    
                    $(".artists_view").fadeIn();
                    $(".close_btn").on("click", function(){
                        $(".artists_view").fadeOut();
                    });
                }
             }
        });
    });

    var $frm2 = $(".artists_list2");
    //이미지클릭 기능
    $frm2.on("submit", function(e){
        e.preventDefault();
        var myData = $frm2.serialize();
        console.log(myData);
        $.ajax({
            type: "post",
            url: $frm2.attr("action"),
            data: myData,
            success: function(data){
                if(data){
                    console.log(data);
                    var jsonData = JSON.stringify(data,['ab_name','date']);
                    console.log(jsonData);

                    var data1 = JSON.parse(jsonData);
                    console.log(data1);

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