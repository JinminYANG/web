$(document).ready(function(){

	// 1s 마다 시간을 가져옴
	var timer = setInterval(function(){
		var hNum;
		var mNum;
		var sNum;

		var now = new Date(); 
		var hr = now.getHours(); 
		var min = now.getMinutes();
		var sec = now.getSeconds();
	

		if (hr>=10) {
			hNum = hr;
		}else{
			hNum = '0' + hr;
		}
		// console.log(hr);
		if (min>=10) {
			mNum = min;
		}else{
			mNum = '0' + min;
		}
		if (sec>=10) {
			sNum = sec;
		}else{
			sNum = '0' + sec;
		}

		// $('figure p span:nth-child(1)').text(hNum);
		// $('figure p span:nth-child(2)').text(mNum);
		// $('figure p span:nth-child(3)').text(sNum);
		$('figure p span').eq(0).text(hNum);
		$('figure p span').eq(1).text(mNum);
		$('figure p span').eq(2).text(sNum);
	
		
	},1000);


	var now = new Date();
	var hr = now.getHours();
	console.log(hr);
	// 시간에 따라 화면 테마 변경
	if(hr>=5 && hr<11){		// morning
		$('#wrap').removeClass();
		$('#wrap').addClass("morning");
		$('nav li').removeClass();
		$('nav li').eq(0).addClass("on");
	} else if(hr>=11 && hr<17){		//afternoon
		$('#wrap').removeClass();
		$('#wrap').addClass("afternoon");
		$('nav li').removeClass();
		$('nav li').eq(1).addClass("on");
	} else if(hr>=17 && hr<22){		//evening
		$('#wrap').removeClass();
		$('#wrap').addClass("evening");
		$('nav li').removeClass();
		$('nav li').eq(2).addClass("on");
	} else if(hr>=22 && hr<5){		//night
		$('#wrap').removeClass();
		$('#wrap').addClass("night");
		$('nav li').removeClass();
		$('nav li').eq(3).addClass("on");
	}


	$('nav li').on("click", function(){
		var className = $(this).children("a").text();
		$('nav li').removeClass();
		$(this).addClass("on");
		$("#wrap").removeClass();
		$("#wrap").addClass(className);
	});	
});