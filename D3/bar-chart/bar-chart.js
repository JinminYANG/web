// bar-chart.js

const width = 500;
const height = 500;
const margin = {top: 40, left: 40, bottom: 40, right: 40};

const data = [
    {name: 'a', value: 10},
    {name: 'b', value: 29},
    {name: 'c', value: 32},
    {name: 'd', value: 25},
    {name: 'e', value: 23},
    {name: 'f', value: 15}
];

const x = d3.scaleBand()
    // .scaleBand() 그래프의 막대의 반복되는 범위를 정해준다.
    .domain(data.map(d => d.name))
    // .domain()은 내용에 들어갈 입력 영역
    // .domain() 각각의 막대에 순서대로 막대에 매핑한다.
    // .map() 함수를 이용하여 배열로 이루어진 data를 처리한다.
    .range([margin.left, width - margin.right])
    // .range() 시작위치와 끝 위치로 눈금의 범위를 지정한다.
    .padding(0.2);
    // .padding() 막대의 여백을 설정한다.

const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    // .domain()은 내용에 들어갈 입력 영역
    // 선형태의 값으로 최소값은 0, .max()는 .extent()와 비슷하게 동작해서 가장 큰 값을 반환해준다.
    // .nice()는 시작값과 끝 값을 반올림 값으로 변환해준다.
    .range([height - margin.bottom, margin.top]);
    // .range()는 출력 범위 => 위치값으로 최소값의 위치와 최대값의 위치를 배열로 받아 매핑한다.


// axis는 중심선을 의미
const xAxis = g => g
    // 'g' 명칭의 사용은 svg의 'g' 엘리먼트를 표현
    .attr('transform', `translate(0, ${height - margin.bottom})`)
    // x축의 위치 지정
    .call(d3.axisBottom(x).tickSizeOuter(0));
    // .axisBottom()는 중심선을 기준으로 아래쪽에 ticks를 위치시킨다.
    // .tickSizeOuter()는 tick의 바깥 선의 크기를 조절한다.

const yAxis = g => g
    .attr('transform', `translate(${margin.left}, 0)`)
    // y축의 위치를 지정한다. translate(x, y)
    .call(d3.axisLeft(y))
    // axisLeft() 왼쪽 세로 축을 만드는데 사용한다.
    .call(g => g.select('.domain').remove());
    // .select()는 document.querySelector()와 비슷하게 해당 선택자를 선택할 수 있다.
    // g(svg g element)중 'class="domain"' 요소를 삭제하였다.

const svg = d3.select('body').append('svg').style('width', width).style('height', height);
svg.append('g').call(xAxis);
// svg에 g 엘리먼트를 추가하고 만들어놓은 X축의 설정을 call 한다.
svg.append('g').call(yAxis);
// svg에 g 엘리먼트를 추가하고 만들어놓은 Y축의 설정을 call 한다.
svg.append('g')
    .attr('fill', 'steelblue')
    .selectAll('rect').data(data).enter().append('rect')
    // .selectAll()과 .select() 메소드는 해당 엘리먼트를 찾지만, 가상의 요소로 선택되기도 한다.
    // .data() 앞에 선택된 select에 (data)배열에 Join하여 새 선택항목을 반환한다.
    // .enter()는 DOM에 없는 선택된 엘리먼트에 각 데이터에 대한 자리의 노드를 반환한다.

    // svg에 g 엘리먼트를 추가하고 그 안의 rect 엘리먼트를 찾는다..
    // 새로 추가된 g 엘리먼트이기 때문에 그 안의 rect 엘리먼트는 없기 때문에 가상의 엘리먼트로 선택된다.
    // .data(data)로 가상의 엘리먼트에 data 배열 데이터와 Join 되고
    // .enter() Join 된 데이터에 각 자리에 대한 노드를 반환하고
    // .append() 반환된 노드 데이터를 담고 rect 엘리먼트를 추가한다.
    // ex) data = [1, 2, 3, 4] 값을 가지고 있었다면 1, 2, 3, 4 데이터와 매핑된 rect 엘리먼트가 4개 추가됩니다.
    .attr('x', d => x(d.name))
    .attr('y', d => y(d.value))
    .attr('height', d => y(0) - y(d.value))
    .attr('width', x.bandwidth());
    // .bandwidth()는 막대기의 너비값을 응답한다.

svg.node();