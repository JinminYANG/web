$(function () {


var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.51757502444712 , 127.05206735672006), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var iwContent = '<div class="PlaceInfoWindow InfoWindow  PlaceInfoWindow-collapsable">\n' +
    '\t<div class="top"></div>\n' +
    '\t<div class="body" data-id="body">\n' +
    '        <button type="button" data-id="min" class="img_tooltip ico_min">축소하기</button>\n' +
    '        <button type="button" data-id="close" class="img_tooltip ico_close ICON-closebox2">닫기</button>\n' +
    '\t\t<div class="head_tooltip">\n' +
    '\t\t\t<strong class="placename"><a href="https://place.map.kakao.com/1419631132" target="_blank" data-id="name" class="name" title="하이어뮤직레코즈">하이어뮤직레코즈</a></strong>\n' +
    '\t\t\t<a href="#none" target="_blank" data-id="detail" class="detail">상세보기<span class="img_tooltip coach_detail"></span></a>\n' +
    '\t\t</div>\n' +
    '\t\t<div class="metadata">\n' +
    '\t\t\t<strong class="screen_out">별점</strong>\n' +
    '\t\t\t<em data-id="score">5.0</em>\n' +
    '\t\t\t<span class="ICON-stars"><span data-id="stars" style="width: 100%;"></span></span>\n' +
    '\t\t\t<a href="https://place.map.kakao.com/1419631132#comment" target="_blank" data-id="vote">(<span class="num">3</span>건)</a>\n' +
    '\t\t\t<span class="sep"></span>\n' +
    '\t\t\t<a href="https://place.map.kakao.com/1419631132#review" target="_blank" data-id="review">리뷰 <span class="num">0</span></a>\n' +
    '\t\t</div>\n' +
    '\t\t<div class="content">\n' +
    '\t\t\t<a href="#none" data-id="placeimg" class="thumb_place">\n' +
    '\t\t\t\t<span class="frame_g"></span>\n' +
    '\t\t\t</a>\n' +
    '\t\t\t<div class="content_place">\n' +
    '\t\t\t\t<!-- 2018-06-07 2줄 말줄임 -->\n' +
    '\t\t\t\t<p data-id="address" class="address" title="서울 강남구 삼성로126길 12 3층">서울 강남구 삼성로126길 12 3층</p>\n' +
    '\t\t\t\t<p data-id="addInfoAddr" class="addInfoAddr"><span class="zipcode">(우) 06084</span>(지번) 삼성동 64-2</p>\n' +
    '\t\t\t\t<p data-id="contact" class="contact">\n' +
    '\t\t\t\t\t<span data-id="phone" class="phone">070-4189-7142</span> <span class="ICON-middot"></span>\n' +
    '\t\t\t\t\t<a href="#none" target="_blank" class="detail">상세보기</a>\n' +
    '                    <span class="ICON-middot"></span> <a href="#none" data-id="report" class="report">정보수정</a>\n' +
    '\t\t\t\t\t<span class="ICON-middot"></span> <a href="https://www.facebook.com/H1GHRMUSICOFFICIAL" target="_blank" data-id="website" class="website">홈페이지</a>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '        <div data-id="addition" class="addition HIDDEN"></div>\n' +
    '        <div class="toolbar" data-id="toolbar"><div>\n' +
    '\t<div class="InfoWindowToolbar">\n' +
    '        <a href="#none" data-id="fav" class="fav"><span class="ico_toolbar">즐겨찾기</span><span data-id="favCount" class="num">100</span></a>\n' +
    '        <a href="#none" data-id="rv" class="rv ICON-roadview"><span class="ico_toolbar">로드뷰</span></a>\n' +
    '        <a href="#none" data-id="rough" class="rough"><span class="ico_toolbar">지도공유</span></a>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="InfoWindowDirection">\n' +
    '        <button type="button" class="btn_direction">길찾기</button>\n' +
    '        <div data-id="waypoint" class="group_direction">\n' +
    '            <button type="button" data-id="origin" class="origin">출발</button>\n' +
    '            <button type="button" data-id="via" class="via">경유</button>\n' +
    '            <button type="button" data-id="dest" class="dest">도착</button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div></div>\n' +
    '\n' +
    '        <!--\n' +
    '        <a data-id="intercityBtn" href="#" class="intercityBtn HIDDEN">실시간예매</a>\n' +
    '        -->\n' +
    '\t</div>\n' +
    '\t<div class="bottom"></div>\n' +
    '</div>',
    iwPosition = new kakao.maps.LatLng(37.51757502444712 , 127.05206735672006),
    iwRemoveable = true;

var infowindow = new kakao.maps.InfoWindow({
    map: map, // 인포윈도우가 표시될 지도
    position : iwPosition,
    // content : iwContent,
    removable : iwRemoveable
});

});
