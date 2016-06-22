import React from 'react';
import ReactFauxDOM from 'react-faux-dom';
import d3 from './../../lib/d3';
import Chart from './chart';

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mockData: [[1, 2], [100, 200], [1000, 2000], [10000, 20000]]
    }
  }

  render() {

    return(
      <Chart dataSet={this.state.mockData} xUpper={26000} 
              xName={'Followers'} yUpper={20000} yName={'Average Forks'}/>
    )
  }
}
// chart('d3Graph2', ', undefined, 15000);
export default Sample;