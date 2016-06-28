import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
// import { Grid } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownVal: "Repos"
    }
  }

  render () {
  	return(
  		<FormGroup>
      	<Checkbox inline>Sort?</Checkbox>
      

      </FormGroup>
  	)
  }
};

export default Filters;