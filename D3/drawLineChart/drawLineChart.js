/*
* ref: https://itchallenger.tistory.com/155
*/

async function drawLineChart() {
    const dataset = await d3.json("nyc_weather_data.json");

    // json array가 테이블이라면 json은 row, 우리가 원하는 column은 프로퍼티
    // 축 설정
    // x축 : 날짜
    // y축 : 최대 온도
    // Access data
    const dateFormatString = "%Y-%m-%d";
    const dateParser = d3.timeParse(dateFormatString);
    const xAccessor = (d) => dateParser(d.date);
    const yAccessor = (d) => d.temperatureMax;

    // Create dimensions for our chart
    // We want a small top and right margin to give our chart some space.
    // The line of the y-axis might overflow the chart bounds, so let's
    // define a larger bottom and left room to create room for our axes.
    // 디멘션 설정
    // dimension은 크기와 비율 (전체 차트를 포함. 축, 라벨, 데이터, 모든 SVG element)
    let dimensions = {
        width: window.innerWidth * 0.9,
        height: 400,
        margin: {
            top: 15,
            right: 15,
            bottom: 40,
            left: 60,
        },
    };

    // 바운드 크기 결정 (모든 데이터 엘리먼트를 포함 (line))
    dimensions.boundedWidth =
        dimensions.width - dimensions.margin.left - dimensions.margin.right;
    dimensions.boundedHeight =
        dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

    // dom 생성
    const wrapper = d3
        .select("#wrapper")     // 선택
        .append("svg")      // 해당 속성 DOM element에 추가
        .attr("width", dimensions.width)    // 첫번째 인자 attribute 이름, 두 번째 인자 값
        .attr("height", dimensions.height);

    // bounding 박스 만들기
    // svg 안의 element들은 전부 svg여야 한다.
    // 차트를 g안에 그린 후 `<g>`안의 엘리먼트들을 한 번에 옮길 수 있다.
    const bounds = wrapper
        .append("g")    // g는 div랑 유사하다.
        .style(
            "transform",
            `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
        );

    // 스케일 만들기
    const yScale = d3
        .scaleLinear()
        .domain(d3.extent(dataset, yAccessor)) // [최소,최대]배열 리턴
        // d3.extent(dataset,accessor) 메소드 사용 시 해당 배열 => [최소,최대] 배열 리턴
        .range([dimensions.boundedHeight, 0]); // range의 [최대,최소]범위. y는 위에서 아래임으로 뒤집어준다.

    // 사각형으로 어는점 미만 표시
    const freezingTemperaturePlacement = yScale(32); // 화씨 어는점
    const freezingTemperatures = bounds
        .append("rect")
        .attr("x", 0)
        .attr("width", dimensions.boundedWidth)
        .attr("y", freezingTemperaturePlacement)
        .attr("height", dimensions.boundedHeight - freezingTemperaturePlacement)
        .attr("fill", "#e0f3f3"); // 직사각형이 얼음을 나타내도록 서리 모양으로 만듭니다.

    const xScale = d3
        .scaleTime()
        .domain(d3.extent(dataset, xAccessor)) // 날짜 객체로 작업 중이므로 시간 척도를 사용합니다.
        .range([0, dimensions.boundedWidth]);

    /*
        d : 데이터
            - 어떤 그림을 그릴지에 대한 정보

        M : 해당 점으로 이동 (M x y)
        L : 해당 점으로 그림 그리기 (L x y)
        Z : 시작 점으로 돌아가기

        bounds.append("path").attr("d", "M 0 0 L 100 0 L 100 100 L 0 50 Z")
    */
    const lineGenerator = d3
        .line() // 데이터 점을 d 문자열로 변환하는 생성기를 만듭니다.
        // 적절한 Accessor와 scale로 데이터 포인트를 변환하여 픽셀 공간에서 스케일링된 값을 얻을 수 있습니다.
        .x((d) => xScale(xAccessor(d)))     // x축 value 정보
        .y((d) => yScale(yAccessor(d)));    // y축 value 정보

    // 진짜 선 그리는 부분. svg 디폴트는 black으로 채우고 테두리 없음임
    const line = bounds
        .append("path")
        // 라인 생성기 기능에 데이터 세트를 제공합니다.
        .attr("d", lineGenerator(dataset))
        // SVG 요소는 기본적으로 검은색 채우기와 스트로크 없음. 스타일링을 추가하지 않는 한 채워진 모양을 제공합니다.
        .attr("fill", "none")    // 채움 없음
        .attr("stroke", "#af9358")  // 테두리 색상 지정
        // .attr("stroke-width", 2);    // 테두리 두께

    // Additional things to draw (tick marks, labels, legends, etc)

    // 축 만들기
    // y축 그리기
    const yAxisGenerator = d3
        .axisLeft() // We want labels of the y-axis to be to the left of the axis line
        .scale(yScale);
    // Our axis generator will create lots of element; create a g element to contain them and keep our DOM organized
    const yAxis = bounds.append("g").call(yAxisGenerator);

    // x축 그리기
    const xAxisGenerator = d3
        .axisBottom() // We want our labels of the x-axis to appear under the axis line
        .scale(xScale);
    const xAxis = bounds
        .append("g")
        .call(xAxisGenerator)
        // 여기까지는 그냥 라벨이 아래로 갈 뿐이어서 실제로 바닥으로 옮겨주는 작업을 해야 한다.
        .style("transform", `translateY(${dimensions.boundedHeight}px)`);
}

drawLineChart();