$(document).ready(function(){
	// alert('hi');

	var count = 0;

	$("#wrap>.image>.click a").on("click", function(){
		count ++;
		console.log(count);

		var isEven = (count % 2 === 0) ? true : false;
		console.log(isEven);		

    	if (isEven === false) {
    		
    	}
    	else{

    	}
	});

// 	$("#wrap>.click a").on("toggle", function(){
// 		$(this).parent().css({"left" : '0%'});
// 		$("#wrap>.side").stop().toggle();
// 	})
});