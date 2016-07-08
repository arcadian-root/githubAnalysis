import React from 'react';
import { render } from 'react-dom';
import SearchBar from './SearchBar'
import Filters from './Filters'
import GraphContainer from './GraphContainer';
import Organization from './organization';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


class GraphView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    document.body.style.background = "url('static/assets/bg2.png') top fixed";
    
  }

  render () {
    return (
    	<div>
        <Grid fluid={true}>
          <Col xs={3} xsOffset={1}>
            <Filters /> 
          </Col>
          <Col xs={10} xsOffset={1}>
            <GraphContainer />
          </Col>
        </Grid>
      </div>
    )
  }
}

export default GraphView;
    
