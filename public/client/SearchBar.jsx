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
import $ from 'jquery';
import App from 'GitHub-Network-Graph';

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

  handleSearch (event) {
    if(event.charCode === 13) {
      var nodeType = this.state.dropDownVal;
      nodeType = nodeType.toLowerCase();
      $.ajax({
        url: 'http://localhost:3000/api/v1/' + nodeType + '/' + event.target.value,
        method: 'GET',

        success: (data) => { 
          data = JSON.parse(data);
          console.log(data);
          App.clear();
          let props = data[0]._fields[0].properties;
          App.createNodeFromData({ position: [0, 0, 0], data: data[0] });
        },

        error: (err) => {
          $('#error').text('AJAX request error: ' + 
          JSON.stringify(err.status) + ' ' + JSON.stringify(err.statusText));
          console.log(err);
        }
      });
    }
  }

  render () {
    return (
    	<div>
      
          <FormGroup bsSize="small">
            <InputGroup bsSize="small">
              <FormControl className="searchbar" type="text" placeholder="Search" onKeyPress={this.handleSearch.bind(this)}/>
                <DropdownButton componentClass={InputGroup.Button} id="input-dropdown-addon"
                  title={this.state.dropDownVal} className="searchbar" >
                  <MenuItem onSelect={this.updateDropDown.bind(this)} id="reposMenu" eventKey="Repos">Repositories</MenuItem>
                  <MenuItem onSelect={this.updateDropDown.bind(this)} id="usersMenu" eventKey="Users">Users</MenuItem>
                </DropdownButton>
            </InputGroup>
          </FormGroup>
        
      </div>
    )
  }
}

export default SearchBar;