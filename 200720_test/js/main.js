$(document).ready(function(){
	// alert('hi');

	$(".menu>ul>li").on("mouseover",function(){
		$(this).css({
			'background':"#996699",
			'color':"#fff"
		});
		$(this).children('ul').stop().slideDown();
		$(this).children('ul').children('li').css({
			'color':'#666666'
		})
	});
	$(".menu>ul>li>ul>li").on("mouseover", function(){
		$(this).css({
			'background':'#cc9999'
		});
	});

	$(".menu>ul>li").on("mouseleave",function(){
		$(this).css({
			'background':"#fff",
			'color':"#666666"
		});
		$(this).children('ul').stop().slideUp();
	});
	$(".menu>ul>li>ul>li").on("mouseleave", function(){
		$(this).css({
			'background':'#fff',
			'color':'#666666'
		});
	});

	// $(".menu>ul>li").on("mouseover", function(){
	// 	$(this).children('ul').stop().slideDown();
	// });
	// $(".menu>ul>li").on("mouseleave", function(){
	// 	$(this).children('ul').stop().slideUp();
	// });

	var count =	0;
	if (count < 0) {
		count =0;
	}

	if(count == 0){
		$(".img>img").eq(count).fadeIn();
		$(".img>p>span").eq(1).addClass("on");
		$(".img>p>span").eq(0).removeClass("on");
		console.log(count);
	}

	$(".img>p>span.next.on").on("click",function(){
		count++;
		if(count==1){		
			$(".img>img").eq(count-1).fadeOut();
			$(".img>img").eq(count).fadeIn();
			$(".img>p>span").eq(1).addClass("on");
			$(".img>p>span").eq(0).addClass("on");
			console.log(count);

		}else if(count==2){
			$(".img>img").eq(count-1).fadeOut();
			$(".img>img").eq(count).fadeIn();
			$(".img>p>span").eq(1).removeClass("on");
			$(".img>p>span").eq(0).addClass("on");
			console.log(count);

		}
		$(".img>p>span.prev.on").on("click",function(){
			count--;
			console.log(count);
			if(count==1){
				$(".img>img").eq(count+1).fadeOut();
				$(".img>img").eq(count).fadeIn();
				$(".img>p>span").eq(1).addClass("on");
				$(".img>p>span").eq(0).addClass("on");
			}
		});

	});



	// $(".img>p>span.on").on("click", function(){
	// 	count++;
	// 	if(count==1){	
	// 		$(".img>img").eq(count-1).fadeOut();
	// 		$(".img>img").eq(count).fadeIn();
	// 		$(".img>p>span").eq(0).addClass("on");

	// 		$(".img>p>span").eq(0).on("click", function(){
	// 			count--;
	// 			if(count>1){
	// 				count=0;
	// 			}
	// 			$(".img>img").eq(count+1).fadeOut();
	// 			$(".img>img").eq(count).fadeIn();
	// 			$(".img>p>span").eq(0).removeClass("on");
	// 		})
	// 	}else if(count==2){
	// 		$(".img>img").eq(count-1).fadeOut();
	// 		$(".img>img").eq(count).fadeIn();
	// 		$(".img>p>span").eq(1).removeClass("on");

	// 		$(".img>p>span.on").eq(0).on("click", function(){
	// 			count-2;
	// 			$(".img>img").eq(count+1).fadeOut();
	// 			$(".img>img").eq(count).fadeIn();
	// 			$(".img>p>span").addClass("on");
	// 		});
	// 	}else{
	// 		count=0;
	// 		if(count == 0){
	// 			$(".img>p>span").eq(0).removeClass("on");
	// 		}
	// 	}

	// });
	

});