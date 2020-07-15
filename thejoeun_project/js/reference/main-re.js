$(function(){
	
	/* ==============================
	 * common
	 * ============================== */
	
	headerM();
	footer();
	
	selectMake();
	selectMakeUI();
	
	form();
	calendar();
	
	tooltip();
	
	layerpopup();
	tapBox(); 
	
	accodionM();
	
	listToggle();	

	/* ==============================
	 * gnb 
	 * ============================== */

	gnbHeader();

	/* ==============================
	 * main 
	 * ============================== */
	if($('#main').length != 0){
		Main();
	}
	//Art Space는 별도의 로직 사용
	if($('.subMain').length != 0 && $(".artSpaceOverview").length == 0) {
		subMain();
	}
	
	quickBar();


	/* ==============================
	 * content 
	 * ============================== */
	
	if($('.reservationWrap').length != 0){
		reservation(); //예약
		reservationScrollBar(); //예약 우측 사이드 바
		reservationSlick(); // 예약 swiper
	};
	
	if($('.eventCalendarWrap').length != 0){
		calendarEventMotion();
	};
	
	if($('.faqList').length != 0){
		faq();
	}
	if($('.mypageWrap').length != 0){
		mypage();
	};
	
	if($('.js-count').length != 0){
		numberCount();
	};
	
	if($('.jsSwiperMotion').length != 0){
		jsSwiperMotion();
	};
	
	offer_detail();
	
	if($('.artMapTap').length != 0){
		artMap();
	}
	
	
	
	
	if($('.signatureWrap').length != 0){
		signatureTap();
	}
	
	productPopOpen();
	
	diningTab();
	
	floorMap();
	
	selectTab();
	
	if($('.floorMapTab').length != 0){
		floorMapMotion();
	}
	function floorMapMotion(){
		$('.floorMapTab a').click(function(){
			var idx = $(this).parent().index();
			$(this).parent().addClass('active').siblings().removeClass('active');
			
			$(this).closest('.floorMapTab').siblings('.floorMapView').hide().eq(idx).show();
			return false;
		});
		
		
		$('.floorMapView .map.type1 area').click(function(){
			var target = $(this).closest('.floorMapView'); 
			var idx = $(this).index();
			var img = target.find('.map img').attr('src');
			var number = (idx+1) >= 10 ? (idx+1) : '0' + (idx+1);
			
			target.find('.map img').attr('src',img.replace(img.substr(-6), number +'.jpg'));
			target.find('.mapView > div').eq(idx).show().siblings().hide();
			
			return false;
		});
		
		$('.floorMapView .floorInfo a').click(function(){
			var idx = $(this).parent().index();
			$(this).parent().addClass('on').siblings().removeClass('on');
			$(this).closest('.floorInfo').siblings('.levelWrap').hide().eq(idx).show();
			return false;
		});
		
		$('.floorMapView .levelWrap .map li').click(function(){
			var idx = $(this).index();
			$(this).addClass('on').siblings().removeClass('on');
			$(this).parent().siblings('img').hide().eq(idx).show();
			$(this).closest('.map').siblings('.detailFloor').removeClass('on').eq(idx).addClass('on');
			return false;
		});
		
		$('.floorMapView .levelWrap .map area').click(function(){
			var target = $(this).closest('.levelWrap'); 
			var idx = $(this).index();
			target.find('.detailFloor.on .mapView > div').eq(idx).show().siblings().hide();
			return false;
		});
	};
	
	function artMap(){
		$('.artMapTap li a').click(function(){
			var idx = $(this).parent().index();
			//artIdx 추출 방식 변경, 2019.06.16
			var artIdx = $(this).closest('.artMapTap').siblings('.tapView').eq(idx).find(".btmMenuUl").find("li.on").index();
			artIdx = $(this).closest('.artMapTap').siblings('.tapView').eq(idx).find(".mark").eq(artIdx).find("a.on").index();
			for (var i =0; i < idx; i++) artIdx += $(this).closest('.artMapTap').siblings('.tapView').eq(i).find(".mark.all").find("a").length;
			
			$('.artMapTap .on').removeClass('on');
			$(this).parent().addClass('on').siblings().removeClass('on');
			$(this).closest('.artMapTap').siblings('.tapView').eq(idx).show().siblings('.tapView').hide();
			$('.artMapView > .box').eq(artIdx).addClass('on').siblings().removeClass('on');
			
			$('.artMapView').show();
			$('.fileDown').show();
			$('.otherArtView').hide(); 
			return false;
		});
		
		$('.artMapTap span a').click(function(){
			$('.artMapTap .on').removeClass('on');
			$(this).addClass('on');
			$(this).closest('.artMapTap').siblings('.tapView').hide();
			$('.artMapView').hide(); 
			$('.fileDown').hide();
			$('.otherArtView').show();
			$('.otherArtView .otherArtTab').eq($(this).index()).addClass('on').siblings().removeClass('on');
			return false;
		});
		
		$(".artMapArea").find('map area').click(function(){
			var _class = '.' + $(this).attr('href');
			//idx 추출 방식 변경, 2019.06.16(btmIdx)
			var btmIdx = $(this).closest('.tabBtmMenu').find(".btmMenuUl").find("li.on").index();
			$(this).closest('.tabBtmMenu').find(".mark").eq(btmIdx).find(_class).addClass('on').siblings().removeClass('on');
			//2019.06.16(mapIdx - .artMapView)
			var mapIdx = $(this).closest('.tabBtmMenu').find(".mark").eq(btmIdx).find(_class).index();
			for (var i =0; i < $('.artMapTap').find("li.on").index(); i++) 
				mapIdx += $(this).closest('.artMapArea').find('.tapView').eq(i).find(".mark.all").find("a").length;
			
			$('.artMapView > .box').eq(mapIdx).addClass('on').siblings().removeClass('on'); 
			return false;
		});
		
		$('.mark a').click(function(){
			if(!$(this).hasClass('type4')){
				$(this).addClass('on').siblings().removeClass('on');
				var idx = $(this).index();
				//idx 추출 방식 변경, 2019.06.16
				for (var i =0; i < $('.artMapTap').find("li.on").index(); i++) 
					idx += $(this).closest('.artMapArea').find('.tapView').eq(i).find(".mark.all").find("a").length;
				$('.artMapView > .box').eq(idx).addClass('on').siblings().removeClass('on');
			}
			return false;
		});
	}
	
	function floorMap(){
		var ani = 280;
		var check = true;
		var menuBox = $('.floorButton');
		var moveBar = $('.moveBar');
		var btnWidth = $('.floorButton > li').width();
		moveBar.css('width',btnWidth+22);
		$('.floorMapBox .textBox > div').last().show().siblings().hide()

		$('.floorButton li').click(function(){
			var topNumber = $(this).position().top;
			var idx = $(this).index();
			if(check){
				check = false;
				$(this).addClass('on').siblings().removeClass('on');
				$('.textBox').children('div').eq(idx).fadeIn().siblings('div').hide();
				$('.viewMap').children('img').eq(idx).fadeIn().siblings('img').hide();
				moveBar.stop().animate({"top":topNumber-1},ani,'swing',function(){check = true;});
			}
			return false;
		});
	}
	
	
	function diningTab(){
		$('.diningTab li').click(function(){
			var idx = $(this).index();
			var target = '.' + $(this).find('a').attr('href');
			$(this).addClass('on').siblings().removeClass('on');
			
			if(idx == 0){
				$('.DDfindList > div').show();
			}else{
				$('.DDfindList > div').hide();
				$(target).show().removeClass('wait-animation');
			}
			return false;
		});
	};
	
	
	function quickBar(){
		var winH = $(window).outerHeight();
		var quickH = $(".quickBar .quickH").outerHeight();

		if(!$.mCustomScrollbar) return;

		$.mCustomScrollbar.defaults.scrollButtons.enable = true;
		$(".quickBar .quickC").mCustomScrollbar({scrollInertia: 400});
		
		$('.quickBar').hover(function(){
			$(this).addClass('view');
		},function(){
			$(this).removeClass('view');
		});	
		
		quickResize();
		$(window).resize(function(){
			quickResize();
		});
		
		function quickResize(){
			winH = $(window).outerHeight();
			quickH = $(".quickBar .quickH").outerHeight(); 
			$(".quickBar .quickC").css('height',winH - quickH);
		}
	}
	
	
	function gnbHeader(){
		var target = '#headerWrap';
		
		$('.language > a',target).click(function(){
			$(this).parent().toggleClass('on');
			return false;
		});
		$('.more > a',target).click(function(){
			$(this).parent().toggleClass('on');
			return false;
		});
		
		$('#headerWrap .gnb > ul > li > a').hover(function(){
			$(this).parent().addClass('on').siblings().removeClass('on');
			$('#headerWrap').addClass('on');
			if($(this).next('.gnbDepth2').length){
				$('#headerWrap .gnbDepth2').not($(this).next('.gnbDepth2')).stop().hide();
				$(this).next('.gnbDepth2').stop().slideDown('fast');
				$('#headerWrap .bgDepth').stop().slideDown('fast');
			}
		});
		
		$('#headerWrap .gnb').mouseleave(function(){
			gnbNone();
		});
		
		
		gnbScroll();
		$(window).on('mousewheel',function(e){
			gnbScroll(e.originalEvent.deltaY);
		}).scroll(function(){
			var scrollT = $(window).scrollTop();
			if(scrollT > 100){
				$('body').addClass('mainHeaderBg');
			}else{
				$('body').removeClass('mainHeaderBg');
			};
		});
		
		function gnbNone(){
			$('#headerWrap .gnb > ul > li').removeClass('on');
			$('#headerWrap .gnbDepth2').stop().slideUp('fast');
			$('#headerWrap .bgDepth').stop().slideUp('fast');
			$('#headerWrap').removeClass('on');
		}
		
		function gnbScroll(e){
			var scrollT = $(window).scrollTop();
			
			if(e > 0){
				//휠을 아래로
				$('body').addClass('scrollActive');
				gnbNone();
			}else{
				//휠을 위로
				$('body').removeClass('scrollActive');
			}
		};
	};
	
	function signatureTap(){
		var idx = 0;
		
		view();
		$(document).on('click','.signatureTap a',function(){
			idx = $(this).index();
			view();
			return false;
		});
		
		function view(){
			var target = $('.signatureCont'),
				firstBox = '.accordionWrap',
				popupLink = ['popRed','popPurple','popGold'],
				btnPop = $('.beforeMembership a');
			$('.signatureTap a').eq(idx).addClass('on').siblings().removeClass('on');
			target.eq(idx).show().siblings('.signatureCont').hide();
			$('.accordionWrap').not(target.eq(idx).find(firstBox).eq(0)).removeClass('on').find('.accordionBox').slideUp();
			target.eq(idx).find(firstBox).eq(0).addClass('on').find('.accordionBox').show();
			if(idx == 0){
				btnPop.hide();
			}else{
				btnPop.show().attr('href','#' + popupLink[idx-1]);
			}
		};
	};
	
	function accodionM(){
		$(document).on('click','.accordionWrap button.title',function(){
			//$('.accordionWrap').not($(this).parent()).removeClass('on').find('.accordionBox').slideUp();
			$(this).parent().siblings('.accordionWrap').removeClass('on').find('.accordionBox').slideUp();
			$(this).next().slideToggle().parent().toggleClass('on');
			return false;
		});
	};
	
	function offer_detail(){
		$(document).on('click','.priceDetail > p',function(){
			$(this).next('.eventCalendar').slideToggle(400);
			$(this).toggleClass('on');
			return false;
		});
	};
	
	function jsSwiperMotion(){
		$('.jsSwiperMotion .swiperWrap').each(function(){
			var target = $(this),
				ul = target.find('ul'),
				list = ul.find('li'),
				bnt_left = target.closest('.jsSwiperMotion').find('.btnLeft'),
				bnt_right = target.closest('.jsSwiperMotion').find('.btnRight'),
				number = target.closest('.jsSwiperMotion').find('.swiperArrow .number'),
				show = 1,
				toScroll=1,
				dot = true;
			
			target.data('show') ? show = target.data('show') : show;
			target.data('toscroll') ? toScroll = target.data('toscroll') : toScroll = show;
			
			
			if(target.closest('.jsSwiperMotion').hasClass('type2')){
				number.find('span').text(' / ' + Math.ceil(list.length/show));
				ul.on("afterChange", function(event, slick, currentSlide){
					target.find('.swiperArrow .number em').text(currentSlide/show +1);
				});
				target.css('height','auto');
				dot = false;
			}
			
			ul.slick({
			    prevArrow: bnt_left,
			    nextArrow: bnt_right,
				infinite: false,
				slidesToShow: show,
				slidesToScroll: toScroll,
				dots: dot
			});
			
			target.closest('.jsSwiperMotion').show();
			
			if(target.hasClass('imageWrap')){
				ul.on("beforeChange", function(event, slick, currentSlide){
					target.children('.textBox').find('> div').removeClass('on');
				});
				
				ul.on("afterChange", function(event, slick, currentSlide){
					target.children('.textBox').find('> div').eq(currentSlide).addClass('on');
				});
			};
			
			console.log(list.length/show)
			if(list.length/show <= 1){
				target.next().hide();
			};
		});
	};
	
	
	function numberCount(){
		$('.js-count').each(function(e){
			var random = Math.round(Math.random()*5);
			var $el = $(this);
			var rn = parseInt($el.text());
			$({ val : 0 }).animate({ val : rn }, {
			  duration: 1000 + e*100,
			  step: function() {
			    $el.text(cf(Math.floor(this.val)));
			  },
			  complete: function() {
			    $el.text(cf(Math.floor(this.val)));
			  }
			});
		});
	};
	
	function cf(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	
	function mypage(){
		$('.tapBox li a').click(function(){
			if($(this).closest('.tapBox').siblings('.tapView').length){
				var idx = $(this).parent().index();
				var target = $(this).closest('.tapBox').siblings('.tapView').eq(idx);				
				var h = target.find('.slick-active').height();
				$(this).closest('.tapBox').siblings('.tapView').eq(idx).find('.slideBox').css({'height':h});
				
				barMotion(target);
				return false;
			}
		});	
		
		$('.mypageMembership .swiperWrap').each(function(){
			var target = $(this),
				ul = target.find('ul'),
				list = ul.find('li'),
				bnt_left = target.closest('.mypageMembership').find('.btnLeft'),
				bnt_right = target.closest('.mypageMembership').find('.btnRight');
			
			ul.slick({
			    prevArrow: bnt_left,
			    nextArrow: bnt_right,
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: true
			});
			
			if(list.length < 3){
				target.next().hide();
			};
			
		});
		
		$('.myMembership .swiperWrap').each(function(){
			var target = $(this),
				swipe = target.find('> div'),
				list = swipe.find('.slide'),
				bnt_left = target.closest('.myMembership').find('.btnLeft'),
				bnt_right = target.closest('.myMembership').find('.btnRight');
			
			swipe.slick({
			    prevArrow: bnt_left,
			    nextArrow: bnt_right,
				infinite: false,
				dots: true
			});
			
			if(list.length <= 1){
				target.next().hide();
			};
			
			swipe.on("afterChange", function(event, slick, currentSlide){
				barMotion(target);
				swipeH();
			});
			
			barMotion(target);
			swipeH();
			function swipeH(){
				var h = target.find('.slick-active').height();				
				target.find('.slideBox').css({'height':h});
			};
			
		});
		
		function barMotion(t){
			var currentPoint = parseInt(t.find('.slick-active').find('.currentPoint').text());
			var nextPoint = parseInt(t.find('.slick-active').find('.nextPoint').text());
			t.find('.slick-active').find('.barBox .bar span').css('left','0').animate({'left':currentPoint/nextPoint *100 + '%'},800,'easeInOutQuint');
		};
		
		
		$('.inquiryList button').click(function(){
			$('.inquiryList').not($(this).parent()).removeClass('on').find('.answerBox').slideUp('fast');
			$(this).next('.answerBox').slideToggle('fast').parent().toggleClass('on');
		});
	};
	
	
	function faq(){
		$(document).on('click','.faqList .txtQ',function(){
			$(".faqList .txtQ").not($(this)).removeClass('on').siblings(".txtA").slideUp("fast");
			$(this).toggleClass('on').siblings(".txtA").slideToggle("fast");
		});	
	};
	
	function reservationScrollBar(){
		var scrollTop = $(window).scrollTop(),
			winH = $(window).outerHeight(),
			sideScroll = [],
			headerH = $('#headerWrap').outerHeight(),
			item = '.productListBox .productItem',
			sideList = ".productWrap",
			reservationCont = '.reservationBox';
			
				
		$.mCustomScrollbar.defaults.scrollButtons.enable = true;
		$(".productWrap").mCustomScrollbar({theme:"dark", scrollInertia: 400});
		
		
		/* 클릭시 이동되는 버전 */
		$(document).on('click','.reservationBox .ui-select-trigger,.reservationBox input',function(e){
			if (!(window.location.href.indexOf("front/reservation/reservationStep3") > -1)) {
				var idx = $(this).closest('.reservationBox').index();
				sideScroll = [];
				$(item).each(function(){
					sideScroll.push($(this).position().top);
				});
				$(item).eq(idx).addClass('on').siblings().removeClass('on');
				$(sideList).mCustomScrollbar("scrollTo",sideScroll[idx]);
			}
		});
		
		
		if($('.reservationInfoWrap').length != 0){
			$(document).on('click','.productWrap .productListH h2',function(e){
				var idx = $(this).closest('.productItem').index();
				var top = $(reservationCont).eq(idx).offset().top - headerH + 4;
				top < 100 ? top = 0 : top;
				$('html,body').animate({'scrollTop':top});
				$(item).eq(idx).addClass('on').siblings().removeClass('on');
				return false;
			});
		};
		
		$(document).on('mousewheel','.reservationSection .productWrap',function(event, delta) {
			event.stopPropagation();
			event.preventDefault();
		});
	};
	
	function reservation(){
		if($('.reservationAside').length){
			resize();
			$(window).resize(function(){
				resize();
			});
		}
		function resize(){
			var winH = $(window).outerHeight(true),
				target = $('.reservationSection'),
				asideCont = target.find('.productWrap'),
				asideNone = target.find('.productNone'),
				asideTop = target.parent().position().top,
				height = target.outerHeight() - asideCont.outerHeight();
			asideCont.css('height',winH - height - asideTop);
			asideNone.css('height',winH - height - asideTop - 2);
		}
	};
	
	function tapBox(){
		if($('.tapBox').size() != 0){
			$('.tapBox li a').click(function(){
				if($(this).closest('.tapBox').siblings('.tapView').length){
					var idx = $(this).parent().index();
					$(this).parent().addClass('on').siblings().removeClass('on');
					$(this).closest('.tapBox').siblings('.tapView').eq(idx).show().siblings('.tapView').hide();
					$(this).closest('.tapBox').siblings('.tapView').eq(idx).find('.slick-slider').slick('reinit');
					return false;
				}
			});		
		};
	};
	
	function headerM(){
		$(window).scroll(function(){
			var scrollW = $(window).scrollLeft();
			$('#headerWrap').css('margin-left',-scrollW);
			$('.subGnb').css('margin-left',-scrollW);
		});
	};
	
	function form(){
		$(document).on('mouseenter','.inp',function(e){
			if($(this).find('input').val()){
				$(this).find('.btnDelete').show();
			};
		}).on('mouseleave','.inp',function(e){
			$(this).find('.btnDelete').hide();
		});
		$(document).on('keypress','.inp input',function(){
			$(this).parent().addClass('test');
			$(this).siblings('.btnDelete').show();
		});
		$(document).on('click','.inp .btnDelete',function(){
			$(this).hide().siblings('input').val('').focus();
			return false;
		});
	};
	
	function calendar(){
		if($('.calendar').size() != 0){
			/* 달력 */
			var date = new Date();
			date.setDate(date.getDate());
			$('.inp.calendar').each(function(){
				var $this = $(this),
					target = $(this).attr('id') ? '#' + $(this).attr('id') : 'body';
				var startDateCheck = $(this).data('startdate') == false ? false : $(this).data('startdate') ? $(this).data('startdate') : date;
				if($(this).hasClass('single')){
					$(this).dateRangePicker({
						language:'en',
						format:'YYYY.MM.DD',
						startDate: startDateCheck,
						singleDate : true,
						singleMonth: true,
						container:target,
						setValue: function(s,s1,s2)
						{
							$(this).find(':text').val(s1);
						},
						beforeShowDay: function(t){
							if (typeof jsSingleDayFilter == 'function') return jsSingleDayFilter(t, target);
							else return [true];
						}
					}).bind('datepicker-apply',function(event,obj) {
						if (typeof jsDrpApply == 'function') jsDrpApply(true, $(this));
					}).bind('datepicker-change',function(event,obj) {
						// 2018.07.10 JH
						if(typeof doActionOnCalChange == "function") {
							doActionOnCalChange(this);
						}
					}).bind('datepicker-opened',function() {
						if (typeof jsDrpApply    == 'function') jsDrpApply(false);
						if (typeof jsDrpOpenFlag == 'function') jsDrpOpenFlag(true);
					}).bind('datepicker-closed',function() {
						if (typeof jsDrpClosed   == 'function') jsDrpClosed($(this));
						if (typeof jsDrpOpenFlag == 'function') jsDrpOpenFlag(false);
					});
				}else{
					var pickerOpt = {
						language:'en',
						container:target,
						stickyMonths: true,
						format:'YYYY.MM.DD',
						startDate: startDateCheck,
						selectForward: false,
						separator : ' ~ ',
						btnRedate:'날짜 다시 선택',
						btnSubmit:'날짜 선택 완료',
						btnSingleSubmit:'적용',
						hotelCalendar : true,
						autoClose: true,
						getValue: function()
						{
							return $(this).val();
						},
						setValue: function(s,s1,s2)
						{
							if(s1 && s2){
								$(this).find(':text').val(s1 + ' ~ ' + s2);
								if (typeof jsSetCalendar   == 'function') jsSetCalendar(s1, s2);
							}else{
								$(this).find(':text').val('');
								if (typeof jsDrpChangeFlag == 'function') jsDrpChangeFlag(true);
								if (typeof jsDrpChanged    == 'function') jsDrpChanged($(this));
							}
						},
						beforeShowDay: function(t){
							if   (typeof jsDaysFilter == 'function') return jsDaysFilter(t,target);
							else  return [true];
						},
						maxDays: 10//최대일수
					};
					// 호텔 유형에만 beforeShowDays, hotelCalendar, miceCalendar 적용
					if (!(target.indexOf("#TA") > -1 || target.indexOf("#miceCalendar") > -1)) {
						delete pickerOpt.beforeShowDay;
						delete pickerOpt.hotelCalendar;
					}
					$(this).dateRangePicker(pickerOpt
					 ).bind('datepicker-opened',function() {
						if(typeof jsDrpOpenFlag == 'function') jsDrpOpenFlag(true);
					}).bind('datepicker-change',function(event,obj) {
						if (typeof jsDrpChanging   == 'function') jsDrpChanging(obj,target);
						if (typeof jsDrpChangeFlag == 'function') jsDrpChangeFlag(true);
						if (typeof jsDrpChanged    == 'function') jsDrpChanged($(this));
					}).bind('datepicker-closed',function() {
						if (typeof jsDrpOpenFlag == 'function') jsDrpOpenFlag(false);
						if (typeof jsDrpClosed   == 'function') jsDrpClosed($(this));
					}).bind('datepicker-first-date-selected', function(event, obj) {
						if (typeof jsDrpAutoClick == 'function') jsDrpAutoClick(target, obj);
					});
				};
			});
		};
	};
	/* //calendar */
	
	
	function calendarEventMotion(){
		var target = '.calendarDate .dotList li';
		var pop = '#container > .calendarThumbnail';
		
		$(document).on('mouseenter',target,function(x){
			// 2018.06.25 JH 해당 jsp에 함수 정의 필요
			if(typeof setDataOnCalThumbnail == "function") {
				setDataOnCalThumbnail(this);
			}
			
			var a = $('.eventCalendarWrap').outerHeight()/2 < $(this).parent().parent().position().top ? 'translateY(-80%)' : 'translateY(0%)';
			var b = $('.eventCalendarWrap').outerWidth()/2 < $(this).parent().parent().position().left ? '-352px' : '100%';
			
			$(this).addClass('hover');
			$(pop).clone().appendTo($(this))
				.css({'top':0,'left':b,'transform':a}).show();
		}).on('mouseleave',target,function(e){
			$(target).find('.calendarThumbnail').remove();
			$(this).removeClass('hover');
		});
	}
	
});

function reservationSlick(obj){
	
	var slider = $('.roomSelectBox .swiperWrap');
	if (!(obj == null || typeof obj == 'undefined')) {
		slider = obj.find("div.roomSelectBox, div.swiperWrap");
	}
	slider.each(function(){
		var target = $(this),
			ul = target.find('ul'),
			list = ul.find('li'),
			number = $('.swiperArrow .number'),
			bnt_left = target.find('.btnLeft'),
			bnt_right = target.find('.btnRight');
		
		number.find('span').text(' / ' + Math.ceil(list.length/3));
			
		ul.slick({
		    prevArrow: bnt_left,
		    nextArrow: bnt_right,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 3,
			speed: 300
		});
		ul.on("afterChange", function(event, slick, currentSlide){
			target.find('.swiperArrow .number em').text(currentSlide/3 +1);
		});
		
		target.css('height','auto');
	});
};

/* parallax scrolling motion */
scrollAnimation();
function scrollAnimation(){
	$(window).load(function(){
		ajaxAnimation();
	});
};

ajaxAnimation();
function ajaxAnimation(){
	var $elements = $( '*[data-animation]' );
	var h = $(window).height();
	$elements.each( function( i, el ) {
		if(!$(this).hasClass('animated')){
			var $el = $( el ),
			    animationClass = $el.data('animation'),
			    $delay = $el.data('delay'),
			    $duration = $el.data('duration');
			
			if($delay>0){
				$el.css({
					'-webkit-animation-delay':$delay+'s',
					'animation-delay':$delay+'s'
				})
			}
			if($duration>0){
				$el.css({
					'-webkit-animation-duration':$duration+'s',
					'animation-duration':$duration+'s'
				})
			}
	
			var t = $el.offset().top;
			if(t > h){
				$el.addClass('wait-animation');
			}
			$el.addClass('animated '+animationClass);
	
			$el.waypoint(function(){
				$el.removeClass('wait-animation');
			}, { offset: '100%', triggerOnce: true });
		};
	});
};

function selectTab(){	
	$(".selectDesignTab .selectDesignTrigger").on("click", function(e){
		$(this).toggleClass('active')
		$(".selectDesignOptions").toggleClass('active');
		if($(".selectDesignOptions").hasClass("active")){
			$(".selectDesignOptions li a").click(function(e){
				var idx = $(this).parent().index() + 1;
				var activeText = $(this).text();
				$(".selectDesignTab .selectDesignTrigger").text(activeText);
				$(".selectDesignTrigger").removeClass("active");
				$(".selectDesignOptions").removeClass("active");
				$(this).parents(".selectDesignTab").siblings('.selectDesignTabView').eq(idx).fadeIn(300).siblings('.selectDesignTabView').hide();
				e.preventDefault()
			})
			$(document).click(function(e){
				if (!$(e.target).is('.selectDesignTrigger') && !$(e.target).is('.selectDesignOptions li a')) {
					$(".selectDesignTrigger").removeClass("active");
					$(".selectDesignOptions").removeClass("active");
				}
			})
		}
		e.preventDefault()
	})
}

/* form select */
function selectMake(){
	$("select.selectBox").each(function(e,i){
		if($(this).parents('pre').length < 1){
			var classes = $(this).attr("class"),
				id      = $(this).attr("id"),
				name    = $(this).attr("name");
				style	= $(this).attr('style');
				
			var template  = '<div class="' + classes + '" style="' +  style + '">';
				template += '<a href="#" class="ui-select-trigger">' + $(this).find(':selected').text() + '</a>';
				template += '<ul class="ui-select-options">';
				$(this).find("option").each(function(i){
					var cl = '';
					var aCl = ''
					$(this).attr('selected') ? aCl = ' selection' : aCl;
					$(this).attr('class') ? cl = $(this).attr('class') : cl;
					template += '<li class="' + cl + '"><a href="#" class="ui-select-option'+ aCl +'" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</a></li>';
				});
				template += '</ul></div>';
		  
			$(this).wrap('<div class="ui-select-wrapper"></div>');
			$(this).hide().after(template);
			if($(this).is(':disabled')){
				$(this).next('.selectBox').addClass('disabled');
			}
		}
	});
}


function selectMakeUI(){
	$(document).on("hover",".ui-select-option:first-of-type",function(){
	  $(this).closest(".ui-select-options").addClass("ui-select-option-hover");
	}, function(){
	  $(this).closest(".ui-select-options").removeClass("ui-select-option-hover");
	});
	$(document).on("click",".ui-select-trigger", function(e){
		if($(this).closest('.disabled').length == 0){
			if (typeof jsCheckDrpOpened    == 'function') jsCheckDrpOpened();
			$('.ui-select-options').not($(this).next()).hide();
			$('.ui-select-trigger').removeClass('active');
			$(this).addClass('active').next().show();
		}else{
			$('.ui-select-options').not($(this).next()).hide();
		}
		return false;
	});
	$(document).click(function(e){
		$('.ui-select-options').hide();
		$('.ui-select-trigger').removeClass('active');
	});
	$(document).on("click",".ui-select-option", function(e){
	  var $val= $(this).data("value"),
		  $select = $(this).closest(".ui-select-wrapper").find("select");
	  if(!$(this).parent().hasClass('disabled')){
		  if (typeof jsChangeSelectUi == 'function') {
			  var isValid = jsChangeSelectUi($(this));
			  if (!isValid) {
				  $(this).closest('.ui-select-options').hide();
				  $('.ui-select-trigger').removeClass('active');
				  return false;
			  }
		  }
		  $select.val($val);
		  $(this).addClass("selection").parent().siblings().find(".ui-select-option").removeClass("selection");
		  $(this).closest('.ui-select-options').hide().siblings(".ui-select-trigger").text($(this).text());;
		  $('.ui-select-trigger').removeClass('active');
	  }
	  return false;
	});
}

function tooltip(){
	if($('.tooltipLink').size() != 0){
		$('.tooltipLink').hover(function(e){
			var target = $(this).data('tooltip');
			var top = $(this).position().top;
			var left = $(this).position().left;
			
			$('#'+target).show().css({'left':left});
		},function(e){
			var target = $(this).data('tooltip');
			$('#'+target).hide();
		});
		$('.tooltipLink').focus(function(e){
			var target = $(this).data('tooltip');
			var top = $(this).position().top;
			var left = $(this).position().left;
			$('#'+target).show().css({'left':left});
		}).blur(function(){
			var target = $(this).data('tooltip');
			$('#'+target).hide();
		});
	};
	
	if($('.mark').size() != 0){
		$('.mark').hover(function(e){
			var target = $(this).data('tooltip');
			var top = $(this).position().top;
			var left = $(this).position().left;
			
			$('#'+target).show().css({'left':left});
		},function(e){
			var target = $(this).data('tooltip');
			$('#'+target).hide();
		});
	};
};

/* 레이어 팝업 */
function layerpopup(){
	$('.layerPopOpen').click(function(){
		var href = $(this).attr('href');
		layerPopOpen(href);
		return false;
	});
	
	layerPopClose();
}

function layerPopOpen(target){
	var winH = $(window).outerHeight(),popH;
	var cont = $(target).find('.layerPopCont');
	$(target).addClass('on');
	popContposition();
	$(window).resize(function(){popContposition();});
	
	function popContposition(){
		popH = cont.outerHeight();
		winH = $(window).outerHeight();
		//멤버십 약관 부분 헤더 고정으로 인한 예외처리
		if (target == "#clause1" || target == "#clause2" || target == "#clause3") {
			if(popH > winH){
				cont.css({'top':'0','margin-top':0});
				$(".LayerTerms .popHeaderWrap").css({'margin-left':"-9px"})
			}else{
				cont.css({'top':'0','margin-top':0,});
				$(".LayerTerms .popHeaderWrap").css({'margin-left':0})
			}	
		} else {
			if(popH > winH){
				cont.css({'top':'0','margin-top':0});
			}else{
				cont.css({'top':'50%','margin-top':-popH/2});
			}	
		}

	}
	$('body').addClass('hidden');
}

function layerPopClose(){
	$(document).on('click','.btnPopClose, .layerPopWrap .bg',function(){
		$(this).closest('.layerPopWrap').removeClass('on');
		$('body').removeClass('hidden');
		return false;
	});
}

/* 상품 상세 */

function productPopOpen(){
	$('.productPopOpen').click(function(){
		var href = $(this).attr('href');
		var viewImg = $(this).data('image');
		var txt = $(this).find('.txt').html();
		productImgPopOpen(href,viewImg,txt);
		return false;
	});
};

function productImgPopOpen(target,img,txt){
	$(target).find('.productImg img').attr('src',img);
	$(target).find('.txt').html(txt);
	$(target).find('img').load(function(){
		layerPopOpen(target);
	})
}

/* main */
function Main(){
	mainVisual();
	$(window).resize(function(){
		mainVisual();
	});
	
	function mainVisual(){
		var winH = $(window).outerHeight(),
			winW = $(window).outerWidth() - 64,
			headerH =  $('#headerWrap').outerHeight(),
			target = $('.mainVisual .visual'),
			target2 = $('.mainVisual .visualView'),
			textBox = target.find('.textBox'),
			length = target.find('>div').length,
			idx = 0,
			check = true,
			ease = "easeInOutQuint",
			time = 900,
			css =[];
		
		textBox.css('top', winH/2 < 480 ? 280 : winH/2);
		$('.mainVisual').css('height',winH);
		target.css('height',winH);
		target2.find('>div').each(function(e){
			css.push({'width':100/length + '%','left':e*(100/length) + '%','left2':-e*100 + '%'});
			$(this).css({'width':css[e].width,'height':winH,'left':css[e].left})
					.find('>span').css({'width':winW,'left':css[e].left2});
		});
		
		target.find('>div').mouseenter(function(){
			idx = $(this).index();
			$(this).addClass('on').siblings().addClass('off');
			$(this).find('.textView').stop().slideDown(time-100,ease);
			$('.mainVisual .visualView > div').eq(idx).addClass('show')
				.stop().animate({'left':'0','width':'100%'},time,ease).find('>span').stop().animate({'left':0},time,ease);
		});
		
		target.find('> div').mouseleave(function(){
			idx = $(this).index();
			$(this).removeClass('on').siblings().removeClass('off');
			$(this).find('.textView').stop().slideUp(time-100,ease);
			$('.mainVisual .visualView > div').eq(idx).removeClass('show')
				.stop().css({'width':css[idx].width,'left':css[idx].left}).find('>span').stop().css({'left':css[idx].left2});
		});
		
	};
}


/* submain */
function subMain(){
	$(window).load(function(){
		subMainVisual();
		subMainScroll();
		
		$(window).resize(function(){
			subMainVisualResize();
		});
		
		$(window).scroll(function(){
			subMainScroll();
			chromaTV();
		});
	
	});
	
	function subMainScroll(){
		var scrollT = $(window).scrollTop();
		var target = $('.subMain .visual .img div');
		var targetS = $('.subMain.bgDown .visual .img div');
		target.css('background-position','center ' + scrollT/5 + 'px');
		targetS.css('background-position','center ' + 35 + '%');
	};
	
	function chromaTV(){
		if($('.chromaTV').length){
			var target = $('.chromaTV');
			var top = target.offset().top;
			var scrollT = $(window).scrollTop();
			var winH = $(window).outerHeight();
			target.css('background-position-y',scrollT > top-(winH/2) ? -(scrollT - (top-(winH/2)))/10 : 0  + 'px');
		}
	};
	
	function subMainVisualResize() {
		var winH = $(window).outerHeight(),
		headerH =  $('#headerWrap').outerHeight(),
		subGnbH = $('.subGnb').outerHeight(),
		target = $('.subMain .visual'),
		img = target.find('.img > div'),
		btnLeft = target.find('.btnArrowLeft'),
		btnRight = target.find('.btnArrowRight'),
		idx = 0,
		length = img.length -1,
		check = true,
		ease = "easeInOutQuint",
		time = 1000;
		var subGnbInH = 0;
		if ($('.subGnb').find(".subGnbIn").length > 0) {
			subGnbInH = $('.subGnb').find(".subGnbIn").outerHeight();
		}
		
		target.css('height',winH-headerH-subGnbH+subGnbInH);
		$('.subGnb').addClass('type2');
		
		if(length == 0){
			btnLeft.hide();
			btnRight.hide();
		}
	}
	
	function subMainVisual(){
		var winH = $(window).outerHeight(),
			headerH =  $('#headerWrap').outerHeight(),
			subGnbH = $('.subGnb').outerHeight(),
			target = $('.subMain .visual'),
			img = target.find('.img > div'),
			btnLeft = target.find('.btnArrowLeft'),
			btnRight = target.find('.btnArrowRight'),
			idx = 0,
			length = img.length -1,
			check = true,
			ease = "easeInOutQuint",
			time = 1000;
		var subGnbInH = 0;
		if ($('.subGnb').find(".subGnbIn").length > 0) {
			subGnbInH = $('.subGnb').find(".subGnbIn").outerHeight();
		}
		
		target.css('height',winH-headerH-subGnbH+subGnbInH);
		$('.subGnb').addClass('type2');
		
		if(length == 0){
			btnLeft.hide();
			btnRight.hide();
		}
		
		btnLeft.click(function(){
			if(check){
				check = false;
				target.find('.img > div').eq(idx).animate({'left':'100%'},time,ease);
				idx >= length ? idx = 0 : idx++;
				target.find('.img > div').eq(idx).css('left','-100%').animate({'left':'0%'},time,ease,function(){
					check = true;
				});
				
				target.find('.textWrap .textBox').fadeOut().eq(idx).delay(500).fadeIn();
			}
			return false;
		});
		
		btnRight.click(function(){
			if(check){
				check = false;
				target.find('.img > div').eq(idx).animate({'left':'-100%'},time,ease);
				idx <= 0 ? idx = length : idx--;
				target.find('.img > div').eq(idx).css('left','100%').animate({'left':'0%'},time,ease,function(){
					check = true;
				});
				target.find('.textWrap .textBox').fadeOut().eq(idx).delay(500).fadeIn();
			}
			return false;
		});
	};
	
	$('.subMain .bgbar').each(function(e){
		var $this = $(this);
		var top = $this.position().top;
		var i = 4;
		
		scrollM($this);
		$(window).scroll(function(){
			scrollM($this);
		});
		function scrollM(t){
			var winH = $(window).outerHeight();
			var scrollT = $(window).scrollTop();
			var targetT = t.closest('section').offset().top;
			t.css('top',top - (scrollT+(winH/4)-targetT)/i);
		};
	});
	
	$('.mainSwiperMotion .swiperWrap').each(function(){
		var target = $(this),
			ul = target.find('ul'),
			list = ul.find('li'),
			bnt_left = target.closest('.mainSwiperMotion').find('.btnLeft'),
			bnt_right = target.closest('.mainSwiperMotion').find('.btnRight'),
			dot = true;
		
		ul.slick({
		    prevArrow: bnt_left,
		    nextArrow: bnt_right,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: dot
		});
		
		ul.on("beforeChange", function(event, slick, currentSlide){
			target.siblings('.swipeCont').find('> div').removeClass('on');
		});
		
		ul.on("afterChange", function(event, slick, currentSlide){
			target.siblings('.swipeCont').find('> div').eq(currentSlide).addClass('on');
		});
		
		if(list.length < 2){
			bnt_left.hide();
			bnt_right.hide();
		};
	});
}


function footer(){
	$('#footerWrap .footerSns .familySite > a').click(function(){
		$(this).next().slideToggle().parent().toggleClass('on');
		return false;
	});
}


/* PC 1:1문의하기 (InquiryIn.jsp) 파라미터 세팅 */
function setParamOnPopOpen(fac1Val, fac2Val) {
	if(fac1Val != "") {
		selectVal("#FACILITY1", fac1Val);
	}
	if(fac2Val != "") {
		selectVal("#FACILITY2", fac2Val);
	}
}

function listToggle(){
	if ($(window).width() <= 640) {
		$(".layerPopWrap.dgResponsive .component li").each(function(){
			$(this).click(function(){
				$(this).toggleClass("active");
			})
		})
	}
	
}

function listClick(thisobj) {
	if ($(window).width() <= 640) {
		$(thisobj).toggleClass("active");
	}
}