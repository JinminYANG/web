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


    var $frm1 = $(".artists_list1");
    //이미지클릭 기능
    $frm1.on("submit", function(e){
        e.preventDefault();
        var myData = $frm1.serialize();
        console.log(myData);
        $.ajax({
            type: "post",
            url: $frm1.attr("action"),
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

    var $frm3 = $(".artists_list3");
    //이미지클릭 기능
    $frm3.on("submit", function(e){
        e.preventDefault();
        var myData = $frm3.serialize();
        console.log(myData);
        $.ajax({
            type: "post",
            url: $frm3.attr("action"),
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

    var $frm4 = $(".artists_list4");
    //이미지클릭 기능
    $frm4.on("submit", function(e){
        e.preventDefault();
        var myData = $frm4.serialize();
        console.log(myData);
        $.ajax({
            type: "post",
            url: $frm4.attr("action"),
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

    var $frm5 = $(".artists_list5");
    //이미지클릭 기능
    $frm5.on("submit", function(e){
        e.preventDefault();
        var myData = $frm5.serialize();
        console.log(myData);
        $.ajax({
            type: "post",
            url: $frm5.attr("action"),
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

    var $frm6 = $(".artists_list6");
    //이미지클릭 기능
    $frm6.on("submit", function(e){
        e.preventDefault();
        var myData = $frm6.serialize();
        console.log(myData);
        $.ajax({
            type: "post",
            url: $frm6.attr("action"),
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

    var $frm7 = $(".artists_list7");
    //이미지클릭 기능
    $frm7.on("submit", function(e){
        e.preventDefault();
        var myData = $frm7.serialize();
        console.log(myData);
        $.ajax({
            type: "post",
            url: $frm7.attr("action"),
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

    var $frm8 = $(".artists_list8");
    //이미지클릭 기능
    $frm8.on("submit", function(e){
        e.preventDefault();
        var myData = $frm8.serialize();
        console.log(myData);
        $.ajax({
            type: "post",
            url: $frm8.attr("action"),
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

    var $frm9 = $(".artists_list9");
    //이미지클릭 기능
    $frm9.on("submit", function(e){
        e.preventDefault();
        var myData = $frm9.serialize();
        console.log(myData);
        $.ajax({
            type: "post",
            url: $frm9.attr("action"),
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

    var $frm10 = $(".artists_list10");
    //이미지클릭 기능
    $frm10.on("submit", function(e){
        e.preventDefault();
        var myData = $frm10.serialize();
        console.log(myData);
        $.ajax({
            type: "post",
            url: $frm10.attr("action"),
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

    var $frm11 = $(".artists_list11");
    //이미지클릭 기능
    $frm11.on("submit", function(e){
        e.preventDefault();
        var myData = $frm11.serialize();
        console.log(myData);
        $.ajax({
            type: "post",
            url: $frm11.attr("action"),
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

    var $frm12 = $(".artists_list12");
    //이미지클릭 기능
    $frm12.on("submit", function(e){
        e.preventDefault();
        var myData = $frm12.serialize();
        console.log(myData);
        $.ajax({
            type: "post",
            url: $frm12.attr("action"),
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

    var $frm13 = $(".artists_list13");
    //이미지클릭 기능
    $frm13.on("submit", function(e){
        e.preventDefault();
        var myData = $frm13.serialize();
        console.log(myData);
        $.ajax({
            type: "post",
            url: $frm13.attr("action"),
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

    var $frm14 = $(".artists_list14");
    //이미지클릭 기능
    $frm14.on("submit", function(e){
        e.preventDefault();
        var myData = $frm14.serialize();
        console.log(myData);
        $.ajax({
            type: "post",
            url: $frm14.attr("action"),
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