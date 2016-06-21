// Compute average
const average = (arr) => {
  var total = arr.reduce( ((accumulator, num) => accumulator + num), 0);
  return ( total / arr.length );
};

// Compute correlation coefficient
const correlation = (xyData) => {
  let _totalX = 0;
  let _totalY = 0;
  let _totalXSqrt = 0;
  let _totalYSqrt = 0;
  let _totalXY = 0; // x * y
  for ( let data of xyData ) {
    _totalX += data[1];
    _totalXSqrt += Math.pow(data[1], 2.0);
    _totalY += data[0];
    _totalYSqrt += Math.pow(data[0], 2.0);
    _totalXY += ( data[1] * data[0] );
  }

  let _itemNum = xyData.length;
  let _numerator = _itemNum * _totalXY - _totalX * _totalY;
  let _demonimator = Math.sqrt ((_itemNum * _totalXSqrt - Math.pow(_totalX, 2.0)) * (_itemNum * _totalYSqrt - Math.pow(_totalY, 2.0)) );
  let correlation = _numerator / _demonimator;
  return correlation;
};

// Linear regression helper function
const leastSquares = (xSeries, ySeries) => {
  let reduceSumFunc = (prev, cur) => prev + cur;
  
  let xAverage = average(xSeries);
  let yAverage = average(ySeries);

  let ssXX = xSeries.map( (x) => Math.pow(x - xAverage, 2) ).reduce(reduceSumFunc);
  let ssYY = ySeries.map( (y) => Math.pow(y - yAverage, 2) ).reduce(reduceSumFunc);
  let ssXY = xSeries.map( (d, i) => (d - xAverage) * (ySeries[i] - yAverage) ).reduce(reduceSumFunc);
    
  let slope = ssXY / ssXX;
  let intercept = yAverage - (xAverage * slope);
  let rSquare = Math.pow(ssXY, 2) / (ssXX * ssYY);
  
  return { slope, intercept, rSquare };
};

export default { average, correlation, leastSquares };
