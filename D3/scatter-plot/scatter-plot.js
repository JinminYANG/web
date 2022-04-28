/*
    * 이슬점과 습도의 관계를 알아보기
    * ref : https://itchallenger.tistory.com/156?category=990195
*/

async function drawScatter() {
    // 1. 데이터 접근
    // json 파일을 받아온 후 accessor function을 선언
    let dataset = await d3.json("nyc_weather_data.json");
    console.log(dataset);
    const xAccessor = d => d.dewPoint;
    const yAccessor = d => d.humidity;
    // 이슬점과 습도에 따른 구름의 양 변화 알아보기. 점의 크기와 색상을 통해 차원 추가가 가능하다.
    const colorAccessor = d => d.cloudCover;


    // 2. 차트 크기 (dimension) 결정
    // 깨지지 않으면서 가장 큰 크기
    const width = d3.min([window.innerWidth * 0.9, window.innerHeight * 0.9]);
    let dimensions = {
        width: width, // 정사각형
        height: width,
        margin: {
            top: 10,
            right: 10,
            bottom: 50, // 왼쪽과 아래에 축, 레이블, 범례 추가할것임
            left: 50, // 왼쪽과 아래에 축, 레이블, 범례 추가할것임
        },
    };

    dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
    dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;


    // 3. 캔버스 그리기
    // Draw canvas - wrapper
    const wrapper = d3.select("#wrapper")
        .append("svg")
        // Note that these width and height sizes are the size "outside" of our plot
        .attr("width", dimensions.width)
        .attr("height", dimensions.height);

    // Draw canvas - bounds
    const bounds = wrapper.append("g")
        // Create a group element to move the inner part of our chart to the right and down
        .style("transform", `translate(${   // 바운드 꼭지점을 이동시켜주는것 포함
            dimensions.margin.left}px, ${dimensions.margin.top}px)`);


    // 4. 스케일 만들기
    // x축 스케일 만들기
    const xScale = d3.scaleLinear()
        .domain(d3.extent(dataset, xAccessor))  // 최대, 최소값. 해당 함수 input은 array / accessor function
        .range([0, dimensions.boundedWidth])    // svg는 css처럼 동적으로 크기 조절하기 어려움으로 dimension을 이용한다.
        // Current scale would be [8.19, 58.38] - let's use .nice() to make a friendlier scale
        .nice();
    // Now our scale is [5, 60] - offering better readability and avoiding smushing dots to the edge

    const yScale = d3.scaleLinear()
        .domain(d3.extent(dataset, yAccessor))
        .range([dimensions.boundedHeight, 0])
        .nice();

    const colorScale = d3.scaleLinear()
        .domain(d3.extent(dataset, colorAccessor))
        .range(["skyblue", "darkslategrey"]) // 도메인을 픽셀에서 컬러로 변경


    // 5. 데이터 그리기
    function drawDots(dataset) {
        const dots = bounds.selectAll("circle")
            .data(dataset)
            .enter().append("circle")
            .attr("cx", d => xScale(xAccessor(d)))
            .attr("cy", d => yScale(yAccessor(d)))
            .attr("r", 3)
            // .attr("fill", color);
            .attr("fill", (d) => colorScale(colorAccessor(d))); // Fill based on our new color scale for cloud cover
    }

    drawDots(dataset.slice(0, 200), "darkgrey");

    setTimeout(() => {
        drawDots(dataset)
    }, 1000);

    // 6. 기타 요소 그리기
    const xAxisGenerator = d3.axisBottom()
        .scale(xScale)

    const xAxis = bounds.append("g")
        .call(xAxisGenerator)
        .style("transform", `translateY(${dimensions.boundedHeight}px)`)

    const xAxisLabel = xAxis.append("text")
        .attr("x", dimensions.boundedWidth / 2)
        .attr("y", dimensions.margin.bottom - 10)
        .attr("fill", "black")
        .style("font-size", "1.4em")
        .html("Dew point (&deg;F)")

    const yAxisGenerator = d3.axisLeft()
        .scale(yScale)
        .ticks(4)

    const yAxis = bounds.append("g")
        .call(yAxisGenerator)

    const yAxisLabel = yAxis.append("text")
        .attr("x", -dimensions.boundedHeight / 2)
        .attr("y", -dimensions.margin.left + 10)
        .attr("fill", "black")
        .style("font-size", "1.4em")
        .text("Relative humidity")
        .style("transform", "rotate(-90deg)")
        .style("text-anchor", "middle")



}

drawScatter();