import React from 'react';
import { render } from 'react-dom';
import SearchBar from './SearchBar'
import Filters from './Filters'
import GraphContainer from './GraphContainer';
import Organization from './organization';


class GraphView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    // document.body.style.backgroundColor = "#E5EFF8";
    document.body.style.background = "url('static/assets/bg2.png') top fixed";
    
  }

  render () {
    return (
    	<div>
        <GraphContainer />
      </div>
    )
  }
}

export default GraphView;
    
