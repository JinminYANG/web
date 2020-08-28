$(function () {
    function map() {
        //// ***지도*** ////
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(37.51757502444712, 127.05206735672006), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 지도에 마커를 표시합니다 
        var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(37.51757502444712, 127.05206735672006)
        });

        // 커스텀 오버레이에 표시할 컨텐츠 입니다
        // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
        // 별도의 이벤트 메소드를 제공하지 않습니다 
        var content = '<div class="wrap">' +
            '    <div class="info">' +
            '        <div class="title">' +
            '            하이어뮤직 레코드' +
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
            '        </div>' +
            '        <div class="body">' +
            '            <div class="img">' +
            '                <img src="../img/logo.png" alt="map_logo" width="73" height="70">' +
            '           </div>' +
            '            <div class="desc">' +
            '                <div class="ellipsis">서울 강남구 삼성로126길 12 3층</div>' +
            '                <div class="jibun ellipsis">(우) 06084 (지번) 삼성동 64-2</div>' +
            '                <div><a href="http://yangjinmin.dothome.co.kr/index.html" target="_blank" class="link">홈페이지</a></div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';

        // 마커 위에 커스텀오버레이를 표시합니다
        // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
        var overlay = new kakao.maps.CustomOverlay({
            content: content,
            map: map,
            position: marker.getPosition()
        });

        // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
        kakao.maps.event.addListener(marker, 'click', function () {
            overlay.setMap(map);
        });

        // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다  //오류있어 제이쿼리문으로 대체
        //function closeOverlay() {
        //    overlay.setMap(null);
        //}

        $(".close").on("click", function () {
            overlay.setMap(null);
        });

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        var mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        // 지도에 교통정보를 표시하도록 지도타입을 추가합니다
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

    }

    map();
    
    $(window).resize(function () {
        map();
    });


    //// **시계** ////
    // 1s 마다 시간을 가져옴
    var timer = setInterval(function () {
        var hNum;
        var mNum;
        var sNum;

        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();


        if (hr >= 10) {
            hNum = hr;
        } else {
            hNum = '0' + hr;
        }
        // console.log(hr);
        if (min >= 10) {
            mNum = min;
        } else {
            mNum = '0' + min;
        }
        if (sec >= 10) {
            sNum = sec;
        } else {
            sNum = '0' + sec;
        }

        $('.time span').eq(0).text(hNum);
        $('.time span').eq(1).text(mNum);
        $('.time span').eq(2).text(sNum);

    }, 1000);
});
