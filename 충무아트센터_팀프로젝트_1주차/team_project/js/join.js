function validate() {
  var re = /^[a-zA-Z0-9]{4,12}$/; // 아이디와 패스워드가 적합한지 검사할 정규식
  var re2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  // 이메일이 적합한지 검사할 정규식

  var id = document.getElementById("id");
  var pw = document.getElementById("pw");
  // var email = document.getElementById("email");
  var email = "";
  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2");

  email += $("#email1").val();
  email += $("#email > span").text();
  email += email2;

  if(!check(re,id,"아이디는 4~12자의 영문 대소문자와 숫자로만 입력")) {
    return false;
  }

  if(!check(re,pw,"패스워드는 4~12자의 영문 대소문자와 숫자로만 입력")) {
    return false;
  }

  if(join_form.pw.value != join_form.checkpw.value) {
    alert("비밀번호가 다릅니다. 다시 확인해 주세요.");
    join_form.checkpw.value = "";
    join_form.checkpw.focus();
    return false;
  }

  if(join_form.name.value=="") {
    alert("이름을 입력해 주세요");
    join_form.name.focus();
    return false;
  }

  if(join_form.sex.value=="") {
    alert("성별을 선택해 주세요");
    join_form.sex_man.focus();
    return false;
  }

  if(join_form.email1.value=="") {
    alert("이메일1을 입력해 주세요");
    email1.focus();
    return false;
  }
  if(join_form.email2.value=="") {
    alert("이메일2을 입력해 주세요");
    $("#email2").focus();
    return false;
  }

  if(!check(re2, email, "적합하지 않은 이메일 형식입니다.")) {
    console.log(email);
    return false;
  }


  // console.log($("#email2").value);

  alert("회원가입이 완료되었습니다.");
}

function check(re, what, message) {
  if(re.test(what.value)) {
    return true;
  }
  alert(message);
  what.value = "";
  what.focus();
  //return false;
}

//이메일에서 value값 가져오는데 오류가 많아 하나 더 만듬
function check2(re, what, message) {
  if(re.test(what)) {
    return true;
  }
  alert(message);
  what.value = "";
  $("#email1").focus();
  //return false;
}

var email2 ="";

$(document).ready(function(){
  // console.log($("#email2").value);

  //숫자만 입력하는 기능
  $("#datepicker:text[numberOnly]").on("keyup", function(){
    $(this).val($(this).val().replace(/[^0-9]/g,""));
  });
  $("#tel:text[numberOnly]").on("keyup", function(){
    $(this).val($(this).val().replace(/[^0-9]/g,""));
  });

  //이메일 뒤 선택기능
  $('select[name=email_select]').change(function() {
    $("select[name=email_select] option:selected").each(function() {
      if($(this).val()=="1"){
        $('#email2').val("");
        $('#email2').attr("disabled", false);
        email2 = $('#email2').val();
      }else{
        $('#email2').val($(this).val());
        $('#email2').attr("disabled", true);
        email2 = $('#email2').val();
      }
    });
  });

  // 확인 클릭했을 때 전부다 지워지는 기능 막음
  $("button").on("click", function(e){
    e.preventDefault();
  });


});