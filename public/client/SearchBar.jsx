import React from 'react';
import { render } from 'react-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownVal: "Repos"
    }
  }

  updateDropDown (event) {
    this.setState({dropDownVal: event});
  }

  render () {
    return (
    	<div>
        <Form >
          <FormGroup bsSize="small">
            <InputGroup bsSize="small">
              <FormControl  className="searchbar" type="text" placeholder="Search"/>
                <DropdownButton componentClass={InputGroup.Button} id="input-dropdown-addon"
                  title={this.state.dropDownVal} className="searchbar" >
                  <MenuItem onSelect={this.updateDropDown.bind(this)} eventKey="Repos">Repositories</MenuItem>
                  <MenuItem onSelect={this.updateDropDown.bind(this)} eventKey="Users">Users</MenuItem>
                </DropdownButton>
            </InputGroup>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default SearchBar
        // <Button type="submit">Submit</Button>


// <DropdownButton title={this.state.dropDownVal} id="bg-nested-dropdown" pullRight>
//               <MenuItem onSelect={this.updateDropDown.bind(this)} eventKey="Repos">Repositories</MenuItem>
//               <MenuItem onSelect={this.updateDropDown.bind(this)} eventKey="Users">Users</MenuItem>
//             </DropdownButton>