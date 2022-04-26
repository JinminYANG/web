/*
Steps:
    - 코드의 Html 부분은 나중에 d3에 의해 수정될 div를 생성합니다.
    - 자바 스크립트 코드의 첫 번째 부분은 svg 영역을 설정합니다. 차트 크기와 여백을 지정합니다. 더 읽어보세요.
    - 그런 다음 X축과 Y축이 그려집니다. 작동 방식을 이해하려면 축에 대한 이 전용 페이지를 읽으십시오.
    - 커널 밀도 추정이 계산됩니다. x.ticks(40) 인수를 사용하여 계산에 사용되는 대역폭을 제어할 수 있습니다.
    - 밀도라는 결과 변수는 각 X축 눈금에 대한 Y 좌표를 제공합니다. 이 정보를 사용하여 d3.line()으로 곡선을 그리는 것이 가능합니다.
*/

// set the dimensions and margins of the graph
const margin = {top: 30, right: 30, bottom: 30, left: 50},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// get the data
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv").then(
    function (data) {
        console.log(data);
        // add the x Axis
        const x = d3.scaleLinear()
            .domain([0, 1000])
            .range([0, width]);
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        // add the y Axis
        const y = d3.scaleLinear()
            .range([height, 0])
            .domain([0, 0.01]);
        svg.append("g")
            .call(d3.axisLeft(y));

        // Compute kernel density estimation (커널 밀도 추정 계산)
        const kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(40))
        const density = kde(data.map(function (d) {
            return d.price;
        }))

        // Plot the area
        svg.append("path")
            .attr("class", "mypath")
            .datum(density)
            .attr("fill", "#69b3a2")
            .attr("opacity", ".8")
            .attr("stroke", "#000")
            .attr("stroke-width", 1)
            .attr("stroke-linejoin", "round")
            .attr("d", d3.line()
                .curve(d3.curveBasis)
                .x(function (d) {
                    return x(d[0]);
                })
                .y(function (d) {
                    return y(d[1]);
                })
            );

    });


// Function to compute density
function kernelDensityEstimator(kernel, X) {
    return function (V) {
        return X.map(function (x) {
            return [x, d3.mean(V, function (v) {
                return kernel(x - v);
            })];
        });
    };
}
/*
    * kernelDensityEstimator
    * 커널 밀도 추정(KDE)은 확률 변수의 확률 분포를 추정합니다.
    * 커널의 대역폭은 추정치의 부드러움을 결정합니다.
    * 대역폭이 너무 작으면 추정치에 가짜 범프와 흔들림이 포함될 수 있습니다.
    * 너무 크고 추정값은 기본 분포에 대해 거의 나타내지 않습니다.
*/

function kernelEpanechnikov(k) {
    return function (v) {
        return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
    };
}