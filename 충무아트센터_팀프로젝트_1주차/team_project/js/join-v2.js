function validate() {
  var re = /^[a-zA-Z0-9]{4,12}$/; // 아이디와 패스워드가 적합한지 검사할 정규식
  var re2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  // 이메일이 적합한지 검사할 정규식

  var id = document.getElementById("id");
  var pw = document.getElementById("pw");
  var email_id = document.getElementById("email_id");
  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2");


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

  if(join_form.datepicker.value=="") {
    alert("생년월일을 입력해 주세요");
    join_form.datepicker.focus();
    return false;
  }

  if(join_form.tel.value=="") {
    alert("연락처를 입력해 주세요");
    join_form.tel.focus();
    return false;
  }

  if(join_form.sample4_roadAddress.value=="") {
    alert("주소를 입력해 주세요");
    join_form.sample4_roadAddress.focus();
    return false;
  }
  if(join_form.sample4_detailAddress.value=="") {
    alert("주소를 올바르게 입력해 주세요");
    join_form.sample4_detailAddress.focus();
    return false;
  }

  if(join_form.email_id.value=="") {
    alert("이메일 주소를 입력해 주세요");
    join_form.email_id.focus();
    return false;
  }

  if(join_form.email_add.value=="") {
    alert("이메일 주소를 올바르게 입력해 주세요");
    join_form.email_add.focus();
    return false;
  }

  if(join_form.email_conf.value=="") {
    alert("이메일 인증을 해주세요");
    join_form.email_conf.focus();
    return false;
  }


  alert("회원가입이 완료되었습니다.");

  //입력 값 전송
  document.join_form.submit(); // 유효성 검사의 포인트
}

function id_check(){
  // window.open("팝업될 문서 경로", "팝업될 문서 이름", "옵션");
  window.open("", "", "width=600, height=200, left=200, top=100");
}

function email_send(){
  alert("이메일을 전송하였습니다.");
}
function email_sm(){
  alert("인증되었습니다.");
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

// 이메일 옵션 선택 후 자동 완성
function change_email(){
  var email_add = document.getElementById("email_add");
  var email_sel = document.getElementById("email_sel");

  // 지금 골라진 옵션의 순서와 값 구하기
  var idx = email_sel.options.selectedIndex;
  var val = email_sel.options[idx].value;

  email_add.value = val;
} 

$(document).ready(function(){

  //숫자만 입력하는 기능
  $("#datepicker:text[numberOnly]").on("keyup", function(){
    $(this).val($(this).val().replace(/[^0-9]/g,""));
  });
  $("#tel:text[numberOnly]").on("keyup", function(){
    $(this).val($(this).val().replace(/[^0-9]/g,""));
  });

  // 확인 클릭했을 때 전부다 지워지는 기능 막음
  $("button").on("click", function(e){
    e.preventDefault();
  });


});