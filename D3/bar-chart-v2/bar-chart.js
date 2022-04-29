/*                                                                                                                                                                                                                                                                /*
    * 습도에 대한 히스토그램
    * ref : https://itchallenger.tistory.com/157?category=990195
*/

async function barChart() {
    // 1. 데이터 접근
    let dataset = await d3.json("nyc_weather_data.json");
    const metricAccessor = d => d.humidity;


    // 2. 차트 크기 (dimension) 결정
    const width = 600 // 이 차트는 많이 생성할 예정이니 차트는 작게 해 두도록 하겠습니다.
    let dimensions = {
        // NOTE: 히스토그램은 키보다 넓을 때 읽기 쉽습니다.
        width: width,
        height: width * 0.9, // 각 막대 위에 배치될 막대 레이블을 고려하기 위해 위쪽의 여백을 크게 둡니다.
        margin: {
            top: 30, right: 10, bottom: 50, left: 50,
        },
    };
    dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
    dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;


    // 3. 캔버스 그리기
    // wrapper를 만들고
    const wrapper = d3
        .select('#wrapper')
        .append('svg')
        .attr('width', dimensions.width)
        .attr('height', dimensions.height);
    // bounds를 group으로 추가 후 평행이동 시켜준다.
    const bounds = wrapper
        .append('g')
        .style('transform', `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`);

    // 4. 스케일 만들기
    // x축 스케일 생성
    const xScale = d3
        .scaleLinear()
        .domain(d3.extent(dataset, metricAccessor))
        .range([0, dimensions.boundedWidth])
        .nice();

    // 4.1 bins 생성
    // Y는 알아서 자동 계산해줌....!
    const binsGenerator = d3
        .histogram()
        .domain(xScale.domain())
        // 습도 값은 어떻게 얻습니까? 우리는 metricAccessor를 사용할 것입니다.
        .value(metricAccessor)
        // 13개의 빈(임계값 + 1)을 만드는 것을 목표로 합니다.
        .thresholds(12);
        // 옵션: 다음과 같은 배열로 5개의 빈을 명시적으로 지정할 수 있습니다.
        // .thresholds([0, 0.2, 0.4, 0.6, 0.8, 1])


    // 데이터를 주어 빈을 만들자.
    const bins = binsGenerator(dataset);
    console.log(bins);

    // y축 스케일 생성
    const yAccessor = d => d.length
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(bins, yAccessor)])
        .range([dimensions.boundedHeight, 0])
        .nice();


    // 5. 데이터 그리기
    // 먼저 bounds에 "g" svg 그룹 요소 하나 생성
    const binsGroup = bounds.append("g");

    // 데이터(bins)를 바인드 함
    const binGroups = binsGroup
        .selectAll('g')
        .data(bins)
        .join('g');

    // 바 사이를 구분하기 위한 간격
    const barPadding = 1;

    // 바를 위한 사각형을 만듭시다
    // x는 humidity 값이기 때문에 xScale로 바꿔줌.
    // x0,y0 (맨왼쪽, 맨위)에서 width, height로 맨오른쪽, 맨아래로 그린다.
    const barRects = binGroups
        .append('rect') // 직사각형 요소에는 x, y, 너비 및 높이 특성이 필요합니다.
        // x 값은 막대의 왼쪽에 해당하며 빈(x0)의 하한에서 시작합니다.
        .attr('x', d => xScale(d.x0) + barPadding / 2)
        // y 값은 막대 상단에 해당합니다(yScale을 사용하여 주파수 값을 픽셀 공간으로 변환).
        .attr('y', d => yScale(yAccessor(d)))
        // 막대 너비를 계산하려면 x1에서 x0을 빼야 합니다. -> 그런 다음 막대 패딩을 빼고 음의 너비로부터 보호합니다.
        .attr('width', d => d3.max([0, xScale(d.x1) - xScale(d.x0) - barPadding]))
        // y 축의 아래쪽에서 y 값을 빼서 막대 높이를 계산합니다.
        .attr('height', d => dimensions.boundedHeight - yScale(yAccessor(d))) // yScale과 더하면 bounds의 높이이고, y가 0이면 더 크게 반비례임.
        // y축이 0에서 시작하기 때문에 boundedHeight를 사용할 수 있습니다.
        .attr('fill', 'cornflowerblue');
        // 간격이 0 이면 해당 데이터(bin)는 보이지 않음

    // 5.1 라벨 그리기
    // 관련 날짜만 있는 빈에 레이블을 추가합니다. 0 레이블을 호출할 필요가 없습니다. - 막대가 비어 있습니다.
    const barText = binGroups
        .filter(yAccessor)
        .append('text')
        // 막대 위로 레이블의 중심을 수평으로 맞춥니다.
        .attr('x', d => xScale(d.x0) + (xScale(d.x1) - xScale(d.x0)) / 2) // 가운데로 위치
        // Shift text up by 5 pixels to add a little gap
        .attr('y', d => yScale(yAccessor(d)) - 5) // y좌표는 맨위점. 살짝 뛰워줌
        .text(yAccessor)
        // 너비를 보정하는 대신 text-anchor를 사용하여 텍스트를 수평으로 정렬합니다.
        .style('text-anchor', 'middle')
        .attr('fill', 'darkgrey')
        .style('font-size', '12px')
        .style('font-family', 'sans-serif')


    // 5.2 평균 표시하기
    const mean = d3.mean(dataset, metricAccessor);

    // 두 점 사이에 선을 그리는 선을 경계에 추가합니다. - (x1, y1) and (x2, y2)
    const meanLine = bounds
        .append("line")
        .attr("x1", xScale(mean))
        .attr("x2", xScale(mean))
        .attr("y1", 25)
        .attr("y2", dimensions.boundedHeight)
        // 기본적으로 선에는 획 색상이 없습니다. - 2px 적갈색 대시와 4px 점선을 만들겠습니다.
        .attr("stroke", "maroon")
        // 점선으로 바꿔주자
        .attr("stroke-dasharray", "2px 4px");

    // 텍스트 레이블을 추가한다.
    const meanLabel = bounds
        .append("text")
        .attr("x", xScale(mean))
        .attr("y", 15)
        .text("mean")
        .attr("fill", "maroon")
        .style("font-size", "12px")
        // SVG에서 텍스트의 수평 정렬을 설정하기 위한 속성입니다.
        .style("text-anchor", "middle");


    // 6. 기타 요소 그리기
    // 각 막대 위에 레이블이 중앙에 있으므로 Y축 레이블이 필요하지 않습니다.
    const xAxisGenerator = d3.axisBottom().scale(xScale);

    const xAxis = bounds
        .append("g")
        .call(xAxisGenerator)
        .style("transform", `translateY(${dimensions.boundedHeight}px)`);

    // 축 텍스트 라벨 추가
    const xAxisLabel = xAxis
        .append("text")
        .attr("x", dimensions.boundedWidth / 2)
        .attr("y", dimensions.margin.bottom - 10)
        .attr("fill", "black")
        .style("font-size", "1.4em")
        // 텍스트에 제공된 메트릭을 사용합니다. 그러나 대부분의 경우 적절한 맵에서 조회를 수행합니다.
        // Use the supplied metric for our text; however in most cases you'd perform a lookup in a proper map
        .text("metric")
        .style("text-transform", "capitalize");
}


barChart();