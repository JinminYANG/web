
var wnum=0; // 이미지의 인덱스
var wwslidingAuto=null;

//6초마다 이미지 변경
function play_w(directw){
	if(directw == 'right'){
		wnum++;
		if(wnum > 2){ // 이미지가 3개이기 때문에 0으로 치환
			wnum = 0;
		}
	}
	else if(directw == 'left'){   // 2 --> 1
		wnum--;
		if(wnum < 0){
			wnum = 2;
		}
	}
	else{
		wnum = directw; // 동그라미 버튼 클릭했을 때
	}

	//버튼
	$(".rollingbtn").find('li.seq a').each(function(){
		$(".rollingbtn li.seq a img").attr('src', $(".rollingbtn li.seq a img").attr('src').replace('_on.png','_off.png')); // off로 초기화
		// $(".rollingbtn li.seq a img").attr('src').replace('_on.png','_off.png');
	});
	$(".rollingbtn li.butt" + wnum + " a img").attr('src',$(".rollingbtn li.butt" + wnum + " a img").attr('src').replace('_off.png','_on.png')); // 설정한 시간마다 img 변환

	// 메인 이미지
	if(wnum == 0){
		$(".viewImgList li.imglist1").animate({'opacity' : 0}, 1000);
		$(".viewImgList li.imglist2").animate({'opacity' : 0}, 1000);
		$(".viewImgList li.imglist0").animate({'opacity' : 1}, 1000);
	}else if(wnum == 1){
		$(".viewImgList li.imglist0").animate({'opacity' : 0}, 1000);
		$(".viewImgList li.imglist2").animate({'opacity' : 0}, 1000);
		$(".viewImgList li.imglist1").animate({'opacity' : 1}, 1000);
	}else if(wnum ==2){
		$(".viewImgList li.imglist0").animate({'opacity' : 0}, 1000);
		$(".viewImgList li.imglist1").animate({'opacity' : 0}, 1000);
		$(".viewImgList li.imglist2").animate({'opacity' : 1}, 1000);
	}

	if(wwslidingAuto){
		clearTimeout(wwslidingAuto);
	}
	// *** 재귀 함수 무한반복 ***
	wwslidingAuto = setTimeout("play_w('right')", 3000);
}

var wwslidingAuto = setTimeout("play_w('right')", 3000);

$(document).ready(function(){
	$('.rollstop a').click(function(){
		$(this).parent().hide();
		$('.rollplay').css('display','inline-block');
		// null = false
		if(wwslidingAuto){
			clearTimeout(wwslidingAuto); 
			// setTimeout. 6초 이후의 이벤트를 정지
		}
	});
	$('.rollplay a').click(function(){
		$(this).parent().hide();
		$('.rollstop').css('display','inline-block');
		// wwslidingAuto = true;
		// if(wwslidingAuto){
		// setTimeout(wwslidingAuto); 
		// setTimeout("play_w('right')", 2000);
		play_w('right');
		// }
	});
	$('.rollingbtn li.seq a').each(function(index){
		$(this).click(function(){
			$('.rollplay').hide();
			$('.rollstop').css('display','inline-block');
			if(wwslidingAuto){
				clearTimeout(wwslidingAuto);
			}
			play_w(index);
		});
	});
});