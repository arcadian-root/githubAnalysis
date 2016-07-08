import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { SplitButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownSortType: "Total Forks",
      isSorted: 'default'
    }
  }

  updateDropDown(event) {
    this.setState({dropDownSortType: event});
  }

  updateSortedState(event) {
    if(this.state.isSorted === 'default') {
      this.setState({isSorted: 'info'})
    } else {
      this.setState({isSorted: 'default'});
    }
  }

  render () {
  	return(
 
  		<ButtonGroup id='sortGroup'>
        <Button onClick={this.updateSortedState.bind(this)} id="light-themed-background"  bsStyle={this.state.isSorted}>Sort Users</Button>
        <DropdownButton title={this.state.dropDownSortType}>
          <MenuItem onSelect={this.updateDropDown.bind(this)} eventKey="Total Forks">Total Forks</MenuItem>
          <MenuItem onSelect={this.updateDropDown.bind(this)} eventKey="Total Stars">Total Stars</MenuItem>
          <MenuItem onSelect={this.updateDropDown.bind(this)} eventKey="Total Followers">Total Followers</MenuItem>
        </DropdownButton>
      </ButtonGroup>
  	)
  }
};

export default Filters;




// <ButtonGroup justified id='sortGroup' >
              // <Button onClick={this.updateSortedState} id="light-themed-background"  bsStyle={this.state.isSorted}>Sort Users</Button>
              // <DropdownButton title={this.state.dropDownSortType}>
                // <MenuItem onSelect={this.updateDropDown.bind(this)} eventKey="Total Forks">Total Forks</MenuItem>
                // <MenuItem onSelect={this.updateDropDown.bind(this)} eventKey="Total Stars">Total Stars</MenuItem>
                // <MenuItem onSelect={this.updateDropDown.bind(this)} eventKey="Total Followers">Total Followers</MenuItem>
              // </DropdownButton>
            // </ButtonGroup>

// <Navbar id='sortBar' className='navbar-default light-themed-background'>

  		// <FormGroup>
  		// 	<Grid>
	  	// 		<Row className="show-grid">
	   //    		<Col xs={6} md={3}>
	   //    			<Checkbox inline>Sort?</Checkbox>
	   //    		</Col>
	   //    		<Col xs={6} md={3}>
	   //    			Node Type: 
	   //    			<SplitButton inline bsSize="xsmall" title={this.state.dropDownNodeType}>
	   //    				<MenuItem eventKey="Repos">Repositories</MenuItem>
	   //    				<MenuItem eventKey="Users">Users</MenuItem>
	   //    			</SplitButton>
	   //    		</Col>
	   //    		<Col xs={6} md={3}>
	   //    			Sort By: 
	   //    			<SplitButton inline bsSize="xsmall" title={"Stars"}>
	   //    				<MenuItem eventKey="1">Action</MenuItem>
	   //    			</SplitButton>
	   //    		</Col>
	   //    		<Col xs={6} md={3}>
	   //    			<Checkbox inline>Mark Inactives?</Checkbox>
	   //    		</Col>
	   //  		</Row>
    //   	</Grid>
    //   </FormGroup>