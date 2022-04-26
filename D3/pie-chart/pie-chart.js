// pie-chart.js
const width = 500;
const height = 500;
const data = [
    {name: 'A', value: 1000, color: '#efa86b'},
    {name: 'B', value: 1500, color: '#c1484f'},
    {name: 'C', value: 1300, color: '#d35d50'},
    {name: 'D', value: 900, color: '#f4c17c'},
    {name: 'E', value: 400, color: '#fae8a4'},
    {name: 'F', value: 1200, color: '#df7454'},
    {name: 'G', value: 1100, color: '#e88d5d'},
    {name: 'H', value: 600, color: '#f8d690'}
];

const arc = d3.arc().innerRadius(150).outerRadius(Math.min(width, height) / 2);
// .arc() 새로운 기본값의 아치(호) 생성
// .innerRadius() 안쪽 반지름 값, 0이면 완전한 원이되고 값이 있으면 도넛 형태가 된다.
// .outerRadius() 바깥쪽 반지름값

const arcLabel = (() => {
    const radius = Math.min(width, height) / 2 * 0.8;
    return d3.arc().innerRadius(radius).outerRadius(radius);
})();
// 라벨이 위치할 반지름 값 설정

const pie = d3.pie()
    // 새로운 기본값의 파이 모양의 생성
    .sort((a, b) => b.value - a.value)
    // data의 value 큰값 > 작은값 순으로 정렬합니다. ex. 반대 순서는 a.value - b.value
    .value(d => d.value);

const arcs = pie(data);

const svg = d3.select('body')
    .append('svg')
    .style('width', width)
    .style('height', height)
    .style('font-size', '16px')
    .attr('text-anchor', 'middle');
    // text-anchor 텍스트의 정렬을 설정합니다 ( start | middle | end | inherit )
    // .style('font-size', '20px sans-serif');

const g = svg.append('g')
    .attr('transform', `translate(${width/2}, ${height/2})`);
    // 우선 차트를 그릴 그룹(g) 엘리먼트를 추가한다.
    // 위치값을 각각 2로 나누는건 반지름 값을 기준으로 한바퀴 돌며 path를 그리기 때문이다.

let value = '';

g.selectAll('path')
    // g의 요소중 이름이 'path'인 엘리먼트 전체선택
    .data(arcs)
    .enter().append('path')
    // 이전과 동일하게 가상 path 요소를 만들고 그래프 데이터와 매핑하여 엘리먼트를 추가한다.
    .attr('fill', d => d.data.color)
    // 다른 그래프와 다르게 .data 라는 객체가 추가되어 있는데, 위에 arcs 변수를 선언할때
    // .pie(data)가 {data, value, index, startAngle, endAngle, padAngle} 의 값을 가지고 있다.
    .attr('stroke', 'white')
    .attr('d', arc)
    .append('title')
    .text(d => `${d.data.name}: ${d.data.value}`);
    // 각각 페스의 자식으로 title의 엘리먼트에 텍스트로 출력한다.
    // 실제로 뷰에 출력되지는 않지만 시멘틱하게 각각의 요소의 설명 문자열을 제공한다.
    // .text(d => value = d);
    // console.log(value);

const text = g.selectAll('text')   
    // g의 요소 중 이름이 'text'인 엘리먼트 전체선택
    .data(arcs)
    .enter().append('text')
    // .enter()는 DOM에 없는 선택된 엘리먼트에 각 데이터에 대한 자리의 노드를 반환한다.
    .attr('transform', d => `translate(${arcLabel.centroid(d)})`)
    // .centroid()는 호 중심선의 중간점을 계산하는 데 사용된다.
    // (startAngle+endAngle)/2 or (innerRadius+outerRadius)/2
    .attr('dy', '0.35em');
    // 해당 내용의 위치에서 y축을 따라 이동함
    // date의 name이 이동하는 현상 확인
    // 라벨을 취가하기 위한 text 엘리먼트를 만들고 위치를 지정합니다.

text.append('tspan')
    .attr('x', 0)
    .attr('y', '-0.7em')
    .style('font-weight', 'bold')
    .text(d => d.data.name)
    // 해당 데이터 항목의 이름을 두꺼운 글씨로 출력한다. ex. A
    // data의 name 속성에 대한 제어

text.filter(d => (d.endAngle - d.startAngle > 0.25)).append('tspan')
    .attr('x', 0)
    .attr('y', '0.7em')
    .attr('fill-opacity', 0.8)
    .text(d => d.data.value);
    // 해당 데이터의 수치값을 투명도를 주어 출력한다. ex. 1000
    // date의 value 속성에 대한 제어

svg.node();