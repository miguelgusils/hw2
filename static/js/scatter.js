


d3.json("/load_data", function (data) {

  data = data['users'];

    // Part 1

    // ------ YOUR CODE GOES HERE --------

    // Convert experience_yr, hw1_hrs and age into numerical values
    data.forEach(function(d){
      //convert data from string to int
      d.age = +d.age;
      d.experience_yr = +d.experience_yr;
      d.hw1_hrs = +d.hw1_hrs;
    })

  var svg = d3.select("#scatter");

      margin = {top: 20, right: 10, bottom: 50, left: 20},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom,
      g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  var radius = d3.scaleSqrt()
    .range([2,5]);


  // Part 2

  // ------ YOUR CODE GOES HERE --------

  // a. Create xScale and yScale scales



  // b. Create axes
////  var xAxis;
////  var yAxis;


  // c. define xScale and yScale domain()


  // this is radius domain - use it as a hint! :)
  radius.domain(d3.extent(data, function(d){
    return d.age;
  })).nice();


  // d. call xAxis

  // e. call yAxis

  // f. use variable "bubble" to store cicrles
//  var bubble;


  // ------ YOUR CODE END HERE --------
var xScale = d3.scaleLinear()
    .range([0, width]);

var yScale = d3.scaleLinear()
    .range([height, 0]);

xScale
    .domain(d3.extent(data, function(d){
      return d.experience_yr;
    }));

yScale
  .domain(d3.extent(data, function(d){
    return d.hw1_hrs;
  }));

  var bubble = g.selectAll("cricle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx",function(d){
      return xScale(d.experience_yr);
    })
    .attr("cy",function(d){
      return yScale(d.hw1_hrs);
    })
    .attr("r", function(d){
      return d.age*0.4;
    })
    .style("fill", "#1b768855");

  bubble
        .attr("transform", "translate(30,15)scale(0.85)");

  g.append('text')
    .attr("transform", "rotate(-90)")
    .attr('x', -90)
    .attr('y', 15)
    .attr('class', 'label')
    .text('Hours spent on HW1');

  g.append('text')
    .attr('x', (width/2) + 60)
    .attr('y', height + 35)
    .attr('text-anchor', 'end')
    .attr('class', 'label')
    .text('Programming experience');

});
