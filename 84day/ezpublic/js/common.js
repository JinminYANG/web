(function(win,$){
	var $html = $("html");
	var deviceSize = {
		pc: 1009,
		tablet: 801,
		mobile: 800
	};

	function scrollShowHide(status){
		$html.css({"overflow-y" : status});
		return $html.width();
	}


	$(win).on("resize", function(){
		var w_size = $(win).width();
		// console.log(w_size);

		if(w_size >= deviceSize.pc && !$("html").hasClass("pc")){
			$html.removeClass("mobile tablet").addClass("pc");
			scrollShowHide("scroll");
		}else if(w_size < deviceSize.pc && w_size >= deviceSize.tablet && !$("html").hasClass("tablet")){
			$html.removeClass("pc mobile").addClass("tablet");
			scrollShowHide("scroll");
		}else if(w_size <= deviceSize.mobile && !$("html").hasClass("mobile")){
			$html.removeClass("pc tablet").addClass("mobile");
			var menu_pos = parseInt($(".mobile-menu-wrap").css("left"));
			// console.log(menu_pos);
			if(menu_pos >= 0){
				scrollShowHide("hidden");
			}

		}
	});

	$(function(){
		$(win).trigger("resize"); //우선순위 높아짐
		$(document).on("mouseover focus", ".pc #gnb>il>li>a, .tablet #gnb>ul>li>a", gnbPlay);

		$(document).on("click", ".mobile #gnb>ul>li:not(.no-sub)>a", gnbPlay);

		function gnbPlay(){
			var $ts = $(this);
			if($("html").hasClass("mobile")){
				$(".mobile #gnb>ul>li>a").removeClass("on");
				$("#gnb ul ul:visible").slideUp(300);
				if($ts.next().is(":hidden")){
					$ts.addClass("on");
					$ts.next().stop(true, true).slideDown(300);
				}
			}else{
				$("#gnb ul ul:visible").slideUp(300);
				$ts.next().stop(true, true).slideDown(300);
			}
		}

		$(document).on("mouseleave", ".pc #gnb, .tablet #gnb", gnbleave);
		function gnbleave(){
			$("#gnb ul ul:visible").slideUp(300);
			$("#gnb>ul>li>a").removeClass("on");
		}

		$(".mobile-menu-open button").on("click", function(){
			$(".mobile-menu-wrap").animate({"left":0},200);
		});


		$(".mobile-menu-close button").on("click", function(){
			$(".mobile-menu-wrap").animate({"left":"-1000px"},200);
			scrollShowHide("scroll");
		});
	});

}(window, jQuery));