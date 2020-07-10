$(document).ready(function(){
	// alert('hi');

	for(var i =0; i<18; i++){

		var output ='';

		output += "rotateY(" + i*60 + "deg)";
		output += "translateY(" + i*35 + "px)";
		output += "translateZ(" + 465 + "px)";

		$("<div></div>").addClass("image").css({
			'width' : 300,
			'height' : 180,
			'background' : 'url('+'images/bg.png' +')',
			'background-size': '100% 100%',
			'transform' : output
		}).appendTo('#tizen_gallery');
	}


	var isMouseDown = false;
	var originalPosition= {x:0, y:0};
	var originalRotation= {x:0, y:0};
	var originalScale= 1.0;

	var createGalleryPosition=function(){
		var output='';
		output+='translateY('+originalPosition.y+'px)';
		output+='rotateY('+originalRotation.y+'deg)';
		return output;
	};

	var createViewportPosition=function(){
		var output='';
		output+='rotateX(-10deg)';
		output+='scaleX('+originalScale+')';
		output+='scaleY('+originalScale+')';
		return output;
	};

	createGalleryPosition(); //translateY(0px),rotateY(0deg)
	createViewportPosition(); //scaleX(1),scaleY(1)

	$(window).on({
		mousedown : function (event){
			// 마우스가 드래그 중임을 알림
			isMouseDown = true;
			// 마우스 위치 저장
			originalPosition.x= event.screenX;
			// console.log(originalPosition.x);
			event.preventDefault();

		},
		mouseup: function(event){
			//마우스 드래그 해제
			isMouseDown = false;
			event.preventDefault();
		},
		mousemove: function(event){
			// 마우스를 드래그 중일 때
				// true
			if(isMouseDown){
				distance = event.screenX - originalPosition.x;

				originalRotation.y += distance;
				originalPosition.y += distance/3;

				$("#tizen_gallery").css('transform', createGalleryPosition());
				$("#viewport").css('transform', createViewportPosition());

				originalPosition.x=event.screenX;
			}
			event.preventDefault();
		}

	});

});