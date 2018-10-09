
var chartWidth = 400;
var chartHeight = 300;

d3.json("/load_data", function (data) {

  data = data['users'];

  data.forEach(function(d){
    //convert data from string to int
    d.age = +d.age;
    d.hw1_hrs = +d.hw1_hrs;
    d.uid = +d.uid;
  })

  // set the dimensions and margins of the graph
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = chartWidth - margin.left - margin.right,
      height = chartHeight - margin.top - margin.bottom;

  // set the ranges
  var x = d3.scaleBand()
      .range([0, width])
      .padding(0.1);
  var y = d3.scaleLinear()
      .range([height, 0]);

  var svg = d3.select("#barChart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // Scale the range of the data in the domains
      x.domain(data.map(function(d) { return d.uid; }));
      y.domain([0, d3.max(data, function(d) { return d.age; })]);

      // append the rectangles for the bar chart
      svg.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.uid); })
          .attr("width", x.bandwidth())
          .attr("y", function(d) { return y(d.age); })
          .attr("height", function(d) { return height - y(d.age); })
          .style("fill", "#1b768855");


          // add the x Axis
      svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .attr('class', 'label')
          .text('Programming experience')
            .call(d3.axisBottom(x));

      // add the y Axis
      svg.append("g")
          .call(d3.axisLeft(y));

    });
    // Part 1

    // ------ YOUR CODE GOES HERE --------

    // Convert experience_yr, hw1_hrs and age into numerical values

/*
    var svg = d3.select("#barChart");

        margin = {top: 0, right: 45, bottom: 45, left: 0},
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // set the ranges
  var x = d3.scaleLinear().range([0, width], .05);

  var y = d3.scaleLinear().range([height, 0]);

      // define the axis
  var xAxis = d3.axisBottom()
      .scale(x);

  var yAxis = d3.axisLeft()
      .scale(y)
      .ticks(10);

      // add the SVG element
/*  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // scale the range of the data
      x.domain(data.map(function(d) { return d.age; }));
      y.domain([0, d3.max(data, function(d) { return d.Freq; })]);  ///

      // add axis
      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
        .selectAll("text")
          .style("text-anchor", "end")
          .attr("dx", "-.8em")
          .attr("dy", "-.55em")
          .attr("transform", "rotate(-90)" );

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 5)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Frequency");

          // Add bar chart
        svg.selectAll("bar")
            .data(data)
          .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.age); })
  //          .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.age); })  ///
            .attr("height", function(d) { return height - y(d.age); });  ///

      });

  // Part 2

  // ------ YOUR CODE GOES HERE --------

  // a. Create xScale and yScale scales



  // b. Create axes
////  var xAxis;
////  var yAxis;


  // c. define xScale and yScale domain()


  // this is radius domain - use it as a hint! :)


  // d. call xAxis

  // e. call yAxis

  // f. use variable "bubble" to store cicrles
//  var bubble;


  // ------ YOUR CODE END HERE --------
*/
