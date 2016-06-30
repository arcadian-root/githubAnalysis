import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { SplitButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownNodeType: "Repo"
    }
  }

  render () {
  	return(
  		<FormGroup>
  			<Grid>
	  			<Row className="show-grid">
	      		<Col xs={6} md={3}>
	      			<Checkbox inline>Sort?</Checkbox>
	      		</Col>
	      		<Col xs={6} md={3}>
	      			Node Type: 
	      			<SplitButton inline bsSize="xsmall" title={this.state.dropDownNodeType}>
	      				<MenuItem eventKey="Repos">Repositories</MenuItem>
	      				<MenuItem eventKey="Users">Users</MenuItem>
	      			</SplitButton>
	      		</Col>
	      		<Col xs={6} md={3}>
	      			Sort By: 
	      			<SplitButton inline bsSize="xsmall" title={"Stars"}>
	      				<MenuItem eventKey="1">Action</MenuItem>
	      			</SplitButton>
	      		</Col>
	      		<Col xs={6} md={3}>
	      			<Checkbox inline>Mark Inactives?</Checkbox>
	      		</Col>
	    		</Row>
      	</Grid>
      </FormGroup>
  	)
  }
};

export default Filters;