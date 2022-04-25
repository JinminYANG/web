// line-chart.js
const width = 500;  // 차트의 너비
const height = 500; // 차트의 높이
const margin = {top: 40, right: 40, bottom: 40, left: 40};  // 상하좌우 여백
const data = [
    {date: new Date('2018-01-01'), value: 10},
    {date: new Date('2018-01-02'), value: 20},
    {date: new Date('2018-01-03'), value: 30},
    {date: new Date('2018-01-04'), value: 25},
    {date: new Date('2018-01-05'), value: 35},
    {date: new Date('2018-01-06'), value: 45},
    {date: new Date('2018-01-07'), value: 60},
    {date: new Date('2018-01-08'), value: 50}
];  // 데이터를 그릴 데이터 값 => date는 X축, value는 Y축

// x축으로 사용될 값 설정
const x = d3.scaleTime()
    // .scaleTime()은 x 축 시간을 기준으로 설정할 것이라고 선언한다.
    // new Date('2022-04-25') 와 같이 날짜 형식으로 데이터를 사용한다.
    .domain(d3.extent(data, d => d.date))
    // .domain()은 내용에 들어갈 입력 영역
    // .extent()는 첫 번째 인자값의 데이터의 date 속성의 값 중에 가장 작은 값과 가장 큰 값을 배열로 응답해준다.
    // ex: [new Date('2018-01-01'), new Date('2018-01-08') ... ]
    .range([margin.left, width - margin.right]);
    // .range()는 출력 범위 => 위치값으로 최소값의 위치와 최대값의 위치를 배열로 받아 매핑한다.

const y = d3.scaleLinear()
    // .scaleLinear() 는 위 .scaleTime()과 비슷한 역할을 하지만 선의 범위로 선언한다.
    .domain([0, d3.max(data, d => d.value)]).nice()
    // 선형태의 값으로 최소값은 0, .max()는 .extent()와 비슷하게 동작해서 가장 큰 값을 반환해준다.
    // .nice()는 시작값과 끝 값을 반올림 값으로 변환해준다.
    .range([height - margin.bottom, margin.top]);
    // .range()는 출력 범위 => 위치값으로 최소값의 위치와 최대값의 위치를 배열로 받아 매핑한다.

// axis는 중심선을 의미
const xAxis = g => g
    // 인자 변수의 명칭으로 g를 사용하는게 svg의 g 엘리먼트를 표현한 것으로 보인다.
    // svg에서 g 엘리먼트는 그룹을 의미한다.
    .attr("transform", `translate(0,${height - margin.bottom})`)
    // x축의 위치를 지정한다. translate(x, y)
    .call(d3.axisBottom(x).ticks(width / 90).tickSizeOuter(0));
    // .call(funcName[, arg[, arg2[, ...]]]);
    // 첫 번째 파라미터로 설정한 이름의 함수를 실행하고, 선택적으로 두번째 이후로 그 밖의 파라미터도 함께 넘길 수 있다.
    // 첫 번째 파라미터로 설정한 이름의 함수에서는 첫 번째 인자값으로 .call() 메소드를 실행한 객체를 this로 가리키며
    // 선택적으로 두 번째 인자값 이후로, 두 번째 파라미터 값들을 받을 수 있다.

    // .axisBottom()는 중심선을 기준으로 아래쪽에 ticks를 위치시킨다.
    // .ticks()는 축별로 표시되는 눈금을 제어하기 위해 사용 / 값이 작아질수록 ticks의 갯수가 줄어든다.
    // .tickSizeOuter()는 tick의 바깥 선의 크기를 조절한다.


const yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    // y축의 위치를 지정한다. translate(x, y)
    .call(d3.axisLeft(y))
    // axisLeft() 왼쪽 세로 축을 만드는데 사용한다.
    .call(g => g.select(".domain").remove())
    // .select()는 document.querySelector()와 비슷하게 해당 선택자를 선택할 수 있다. 하나만 선택된다.
    // 복수 선택을 위해서는 .selectAll() 기능이 있다.
    // 여기에서 g(svg g element)중 'class="domain"' 요소를 삭제하였다.
    // 예제를 확인해보면 Y축의 중심선이 사라진 것을 확인할 수 있다.
    .call(g => {
        // console.log(g.select(".tick:last-of-type text").attr('x'));
        return g.select(".tick:last-of-type text").clone()
            // 'tick' 이라는 클래스 중 마지막에 위치한 엘리먼트의 자식 text 엘리먼트를 복제했다.
            .attr("x", 3)
            // .attr()는 엘리먼트의 속성과 값을 세팅한다. => js의 .setAttribute()
            .attr("text-anchor", "start")
            .attr("font-weight", "bold")
            .attr("font-size", '20px')
            .text('Y축')
            // .text() 위에서 복제한 엘리먼트에 text 값을 줍니다. => js의.innerText()와 유사하다.
    });

const line = d3.line()
    // .line() 데이터의 값을 선으로 표현한다.
    .defined(d => !isNaN(d.value))
    // defined() value의 값이 Number가 아니라면 그래프의 선이 끊겨서 출력된다.
    .x(d => x(d.date))
    // 인자값인 'd' 는 data의 줄임말이다.
    .y(d => y(d.value));

const svg = d3.select('body').append('svg').style('width', width).style('height', height);
// svg를 append하고 직접 width, height 값을 주었습니다.
svg.append('g').call(xAxis);
// svg에 g 엘리먼트를 추가하고 만들어놓은 X축의 설정을 call 한다.
svg.append('g').call(yAxis);
// svg에 g 엘리먼트를 추가하고 만들어놓은 Y축의 설정을 call 한다.
svg.append("path")
    // 그래프에 선이 될 path 엘리먼트를 추가한다.
    .datum(data)
    // .datum()는 데이터를 join하지 않고 가져오거나 설정한다.
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1)
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("d", line);
    // 기본적인 svg의 스타일 속성 정의
svg.node();
// 실행