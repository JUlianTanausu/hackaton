var data = [40,50,60,10,20,0];
var chartWidth = 1200;
var sum = 0;
var colors = [
  "#044b7a",
  "#056aac",
  "#0793ee",
  "#2fa9f9",
  "#60befa",
  "#92d2fc",
  "#c3e6fd"
];
for (var i = 0; i < 6; i++) {
  sum += data[i];
}
var chart = d3.select(".chart");
var button = d3.select("button");
var tooltip = d3.select(".chart")
    .append("span")
    .attr("id", "tooltip")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("a simple tooltip");
chart
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .transition()
    .duration(500)
    .style("width", function(d) {
      return (d / sum) * chartWidth + "px";
    })
    .style("background-color", function(d, i) {
      return colors[i];
    })
    .text(function(d) { return d; });
chart
    .selectAll("div")
var updateChart = function() {
  sum = 0;
  for (var i = 0; i < data.length; i++) {
    var currentInt = rand();
    data[i] = currentInt;
    sum += currentInt;
  }
  
  chart
    .selectAll("div")
    .data(data)
    .transition()
    .duration(500)
    .style("width", function(d) {
      return (d / sum) * chartWidth + "px";
    })
    .style("background-color", function(d, i) {
      return colors[i];
    })
    .text(function(d) { return d; });
}
button.on("click", function() {
  updateChart();
});