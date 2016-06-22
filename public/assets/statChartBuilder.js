import d3 from './../../lib/d3';
import statHandler from './statHandler';

const chart = (target, htmlID, dataSet, xUpper, xName = 'X', yUpper, yName = 'Y') => {
  console.log(target);
  let graph = d3.select(target)
              .append('svg')
              .classed('graph', true)
              .attr('id', htmlID);
  console.log(graph);
  // Calculate the dimension of graph
  const _graphDimension = document.getElementById(htmlID).getBoundingClientRect();
  const [ _graphWidth, _graphHeight ] = [ _graphDimension.width, _graphDimension.height ];

  // Define properties of graph
  const _leftMargin = 70;
  const _bottomMargin = 60;
  const _topMargin = 60;

  // Define x-axis
  const x = d3.scaleLinear()
      .domain([0, xUpper])
      .range([_leftMargin, _graphWidth * 0.9]);
  const _xLength = _graphWidth * 0.9 - _leftMargin;

  // Append x-axis to graph
  let xAxis = graph.append("g")
                    .attr("class", "axis axis--x")
                    .attr("transform", `translate(0, ${_graphHeight - _bottomMargin})`)
                    .call(d3.axisBottom(x).scale(x));

  // Name x-axis with 'Followers'
  xAxis.append('text')
        .text(xName)
        .attr('x', _leftMargin + _xLength / 2)
        .attr('y', 40);

  // Define y-axis
  const _yLength = _graphHeight - _bottomMargin - _topMargin;
  const y = d3.scaleLinear()
      .domain([0, yUpper])
      .range([ _graphHeight - _bottomMargin, _topMargin ]);

  // Append y-axis to graph
  let yAxis = graph.append("g")
                  .attr("class", "axis axis--y")
                  .attr("transform", `translate(${_leftMargin}, 0)`)
                  .call(d3.axisLeft(y).scale(y))
  
  // Name y-axis
  yAxis.append("text")
      .attr("class", "axis-title")
      .attr("x", -10)
      .attr("y", 50)
      .text(yName);

  const _xRatio = _xLength / xUpper;
  const _yRatio = _yLength / yUpper;
  graph.selectAll('dataPoints')
      .data(dataSet)
      .enter()
      .append('svg:circle')
      .attr('cx', (data) => _leftMargin + data[1] * _xRatio )
      .attr('cy', (data) => _graphHeight - _bottomMargin - data[0] * _yRatio )
      .classed('dot', true);

  // compute correlation coefficient
  let _xCollection = [];
  let _yCollection = [];
  for ( let data of dataSet ) {
    _xCollection.push(data[1]);
    _yCollection.push(data[0]);
  }
  const correlation = statHandler.correlation(dataSet);
  console.log('correlation', correlation)


  // compute linear regression attributes
  let _linearRegression = statHandler.leastSquares(_xCollection, _yCollection);
  let x1 = _leftMargin;
  let x2 = _graphWidth * 0.9;
  let y1 = _graphHeight - _bottomMargin - _linearRegression.intercept * _yRatio
  let y2 = _graphHeight - _bottomMargin - (_linearRegression.intercept + _linearRegression.slope * xUpper) * _yRatio;

  // Draw linear regression line
  graph.selectAll('graphLine')
    .data([{x1, x2, y1, y2}])
    .enter()
    .append('svg:line')
    // TODO: set max to _yUpper
    .attr('x1', (d) => d.x1 )
    .attr('x2', (d) => d.x2 )
    .attr('y1', (d) => d.y1 )
    .attr('y2', (d) => d.y2 )
    .attr('stroke', 'red')
    .attr('stroke-width', 2);
};

export default chart;