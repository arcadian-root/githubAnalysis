import React from 'react';
import { render } from 'react-dom';
import { Grid } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import SearchBar from './SearchBar'
import Filters from './Filters'
import GraphContainer from './GraphContainer';
import Organization from './organization';


class DashboardView extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    	<div>
        <Grid fluid={true}>
          <Col xs={10} xsOffset={1}><Filters /></Col>
          <GraphContainer />
        </Grid>
      </div>
    )
  }
}

export default DashboardView;
