$(function () {
    var $frm = $("#loginForm");
    $frm.on("submit", function (e) {
        e.preventDefault();
        var myData = $frm.serialize();
        $.ajax({
            type: "post",
            url: $frm.attr("action"),
            data: myData,
            success: function (res) {
                if (res) {
                    alert("로그인 되었습니다.");
                    var jsonData = JSON.parse(res);
                    var message = jsonData.user_name + "(" + jsonData.user_id + ")" + "님 반갑습니다.";
                    $(".tnb").html(message);
                    $(".cont__login").html(message);
                    //                    console.log("로그인 되었습니다.");
                    //                    var childwin = window.open("index.html", "_blank"),
                    //                    var txt = childwin.getElementsByClassName("tnb");
                    //                    txt.html(message);
                } else {
                    alert("다시 입력해주세요.");
                }
            }
        });
    });
});

function send() {
    var data = document.loginForm.user_id.value;
    window.opener.sendMeData(data + "님 환영합니다.");
//    window.close();
}
