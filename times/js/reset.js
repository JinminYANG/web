$(document).ready(function(){

	// 1s 마다 시간을 가져와야 함.
	var timer = setInterval(function(){

	},1000);

	var hNum;

	var now = new Date(); 
	var hr = now.getHours(); 
	// console.log(hr);
	var min = now.getMinutes();
	// console.log(min);
	var sec = now.getSeconds();
	// console.log(sec);
	

	if (hr>=10) {
		hNum = hr;
	}else{
		hNum = '0' + hr;
	}
	// console.log(hr);



})