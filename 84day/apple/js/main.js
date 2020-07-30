$(function(){
	// alert("hi");

	initScene3();
	// Scene 3: 마스크 애니메이션
	function initScene3(){
		var $container = $("#scene-3"),
		$masks = $container.find(".mask"),
		$lines = $masks.find(".line"),
		maskLength = $masks.length,
		maskData = []; // 각 마스크 자르기 영역의 데이터를 저장

		$masks.each(function(i){
			maskData[i] = {left:0};
			// console.log(i);
		});


		//마스크에 마우스오버 했을 때와 잃을 때 작업
		$container.on({
			mouseenter: function(){
				resizeMask($(this).index());
			},
			mouseleave: function(){
				resizeMask(-1);
			}
		}, '.mask');
		//호출

		resizeMask(-1); //디자인 초기화

		//각 마스크 자르기 영역과 경계의 위치를 애니메이션
		function resizeMask(active){
			// 컨테이너의 폭과 높이를 취득하고
			// 각 자르기 영역의 오른쪽과 아래쪽의 좌표 입력
			var w = $container.width(),
			h = $container.height();
			// console.log("w=" + w);		
			// console.log("h=" + h);

			$masks.each(function(i){
				var $this = $(this), // 이 마스크
				l;					 // 자르기 영역의 왼쪽 좌표

				// active => 마우스 오버된 마스크의 인덱스
				// i => 이 마스크의 인덱스

				//마우스 이벤트에 의해 마스크 노 자르기 영역의 왼쪽 좌표를
				if(active === -1){ 
					l = w/maskLength * i;// 마우스를 벗어난 경우 균등하게 할당
					// console.log(l);
				}
				// 1 < 2
				// 1 < 3
				else if(active < i){ // 마우스 오버된 마스크보다 오른쪽 마스크는
					l = w*(1-0.1 * (maskLength -i)); // 자르기 영역의 왼쪽이 오른쪽 방향으로 수정된다.
					// console.log(l);
				}
				// 1 < 0
				// 1 < 1
				else{
					// 그 외에는 왼쪽이 왼쪽으로
					l = w*0.05*i;
				}


				$(maskData[i]).stop(true).animate({left:l}, {
					duration : 1000,
					easing :"easeOutQuart",
					progress:function(){
						var now = this.left;
						$this.css({
							clip: 'rect(0px ' + w + 'px ' + h + 'px ' + now + 'px)'
						});
						$this.find($lines).css({left:now});
					}
				});
			});
		}
	}
});