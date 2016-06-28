import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { SplitButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
// import { Grid } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';

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
      	<Checkbox inline>Sort?</Checkbox>
      	Sort By: 
      	<SplitButton inline>
      		<MenuItem eventKey="1">Action</MenuItem>
      	</SplitButton>
      </FormGroup>
  	)
  }
};

export default Filters;