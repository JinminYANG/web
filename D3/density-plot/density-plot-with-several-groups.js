/*
    * density-plot-with-several-groups
    * d3의 v4버전 에서만 실행이 가능하도록 코드가 짜여져 있다...!
*/

// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 30, left: 50},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// get the data
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_doubleHist.csv", function (data) {
    console.log(data);
    // add the x Axis
    var x = d3.scaleLinear()
        .domain([-10, 15])
        .range([0, width]);
    svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x));

    // add the y Axis
    var y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, 0.12]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Compute kernel density estimation
    var kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(60))
    var density1 =  kde( data
        .filter( function(d){return d.type === "variable 1"} )
        .map(function(d){  return d.value; }) )
    var density2 =  kde( data
        .filter( function(d){return d.type === "variable 2"} )
        .map(function(d){  return d.value; }) )

    // Plot the area
    svg.append("path")
        .attr("class", "mypath")
        .datum(density1)    // 단일 요소에 단일 데이터를 지정해 줄 때 사용한다
        .attr("fill", "#69b3a2")
        .attr("opacity", ".5")
        .attr("stroke", "#000")
        .attr("stroke-width", 1)
        .attr("stroke-linejoin", "round")
        .attr("d", d3.line()
            .curve(d3.curveBasis)
            // curve()
            // 선은 2차원 [x, y] 점의 시퀀스로 정의되고 영역은 상선과 기준선에 의해 유사하게 정의되지만,
            // 이 이산 표현을 연속된 모양, 즉 점 사이의 보간 방법 등으로 변환해야 하는 과제가 남아 있습니다.
            // 이를 위해 다양한 곡선이 제공됩니다.

            // curveBasis
            // 지정된 제어점을 사용하여 3차 기준 스플라인을 생성합니다.
            // 첫 번째 점과 마지막 점은 스플라인이 첫 번째 점에서 시작하여 마지막 점에서 끝나고,
            // 첫 번째 점과 두 번째 점 사이의 선과 끝에서 두 번째 점과 마지막 점 사이의 선에 접하도록 세 번 반복됩니다.
            .x(function (d) {
                return x(d[0]);
            })
            .y(function (d) {
                return y(d[1]);
            })
        );

    // Plot the area
    svg.append("path")
        .attr("class", "mypath")
        .datum(density2)
        .attr("fill", "#404080")
        .attr("opacity", ".6")
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

// legend
svg.append("circle").attr("cx", 300).attr("cy", 30).attr("r", 6).style("fill", "#69b3a2")
svg.append("circle").attr("cx", 300).attr("cy", 60).attr("r", 6).style("fill", "#404080")
svg.append("text").attr("x", 320).attr("y", 30).text("variable A").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 320).attr("y", 60).text("variable B").style("font-size", "15px").attr("alignment-baseline", "middle")

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

function kernelEpanechnikov(k) {
    return function (v) {
        return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
    };
}
