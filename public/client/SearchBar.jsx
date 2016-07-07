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
      dropDownVal: "Repos",
      validationState: "",
      errorType: ""
    }
  }

  updateDropDown (event) {
    this.setState({dropDownVal: event});
  }

  handleChange(event) {
    this.setState({validationState: "", errorType: ""});
  }

  handleValidInput (event) {
    if(event.charCode  === 13) {
      let query = event.target.value;
      let firstSlash = false;
      let lastSlash = false;
      let slashCount = 0;
      let nodeType = this.state.dropDownVal.toLowerCase();
      for(let i = 0; i < query.length; i++) {
        if(query.charAt(i) === '/' && i === 0) {
          firstSlash = true;
        }
        if(query.charAt(i) === '/' && i === query.length-1) {
          lastSlash = true;
        }
        if(query.charAt(i) === '/') {
          slashCount++;
        }
      }

      if((firstSlash || lastSlash || slashCount > 1 || slashCount < 1) && nodeType === 'repos')  {
        console.log
        this.setState({validationState: 'error', errorType: 'badQuery'});
      } else {
        this.handleSearch(event);
      }
    }
  }
  handleSearch (event) {
    if(event.charCode === 13) {
      let nodeType = this.state.dropDownVal;
      nodeType = nodeType.toLowerCase();
      let url = '';
      if(nodeType === 'users') {
        url = '/api/v1/users/' + event.target.value;
      } else {
        let target = encodeURIComponent(event.target.value);
        url = '/api/v1/initialRepo/' + target;
      }
      $.ajax({
        url: url,
        method: 'GET',

        success: (data) => {
          data = JSON.parse(data);
          if(data === false) {
            this.setState({validationState: "error", errorType: "notFound"});
          } else {
            console.log('frontend', data);
            App.clear();
            let props = data[0]._fields[0].properties;
            App.createNodeFromData({ position: [0, 0, 0], data: data[0] });
          }
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
        <FormGroup controlId="a" validationState={this.state.validationState} bsSize="small">
            <InputGroup aria-describedby="helpblock" bsSize="small">
              <FormControl id='a' onChange={this.handleChange.bind(this)} className="searchbar" type="text" 
                placeholder={"Search " + this.state.dropDownVal}  onKeyPress={this.handleValidInput.bind(this)}/>
                <DropdownButton componentClass={InputGroup.Button} id="input-dropdown-addon"
                  title={this.state.dropDownVal} className="searchbar" >
                  <MenuItem onSelect={this.updateDropDown.bind(this)} id="reposMenu" eventKey="Repos">Repositories</MenuItem>
                  <MenuItem onSelect={this.updateDropDown.bind(this)} id="usersMenu" eventKey="Users">Users</MenuItem>
                </DropdownButton>
            </InputGroup>
            {this.state.validationState === 'error' && this.state.errorType === 'badQuery' ? <ControlLabel id='controllabel'>Please input a valid query using the following format: 'owner/repoName' e.g. facebook/react</ControlLabel> : <a></a> }
            {this.state.validationState === 'error' && this.state.errorType === 'notFound' && this.state.dropDownVal === "Users" ? <ControlLabel id='controllabel'>User not found on GitHub</ControlLabel> : <a></a> }
            {this.state.validationState === 'error' && this.state.errorType === 'notFound' && this.state.dropDownVal === "Repos"? <ControlLabel id='controllabel'> Repo not found on GitHub</ControlLabel> : <a></a>}
          </FormGroup>
      </div>
    )
  }
}

export default SearchBar;