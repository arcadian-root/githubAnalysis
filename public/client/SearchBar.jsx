import React from 'react';
import { render } from 'react-dom';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import $ from 'jquery';
import App from 'GitHub-Network-Graph';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownVal: "Repos",
      validationState: null,
      errorType: ""
    }
  }

  updateDropDown (event) {
    this.setState({dropDownVal: event, validationState: null});
  }

  handleChange(event) {
    this.setState({validationState: null, errorType: ""});
  }

  handleValidInput(event) {
    if(event.charCode  === 13) {
      let query = event.target.value;
      // Handling queries for Repos
      if(this.state.dropDownVal === "Repos") {
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
          this.setState({validationState: 'error', errorType: 'badQuery'});
        } else {
          this.handleSearch(event);
        } 

      } else {
        // Handling queries for Users
        console.log('handling users')
        var specialChars = ["'", '"', ',', '.', '[', ']', '|', '?', '/', '!', '@', '#', '$',
          +'%', '^', '&', '*', '(', ')', '+', '=']
        var valid = true;

        for(var i = 0; i < query.length; i++) {
          for(var j = 0; j < specialChars.length; j++) {
            if(query.charAt(i) === specialChars[j]) {
              valid = false;
            }
          }
        }

        if(valid === true) {
          this.handleSearch(event);
        } else {
          this.setState({validationState: 'error', errorType: 'badQuery'});
        }
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
      this.setState({validationState:"warning"});
      $.ajax({
        url: url,
        method: 'GET',

        success: (data) => {
          data = JSON.parse(data);
          if(data === false) {
            this.setState({validationState: "error", errorType: "notFound"});
          } else {
            console.log('frontend', data);
            App.reset(data[0]);
            // let props = data[0]._fields[0].properties;
            // App.createNodeFromData({ position: [0, 0, 0], data: data[0] });
            this.setState({validationState: "success"})
          }
        },

        error: (err) => {
          $('#error').text('AJAX request error: ' + 
          JSON.stringify(err.status) + ' ' + JSON.stringify(err.statusText));
          console.log(err);
          this.setState({validationState: "error", errorType: "notFound"});
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

            {this.state.validationState === 'error' && this.state.errorType === 'badQuery' 
              && this.state.dropDownVal === "Repos" ? <div class='container-fluid' id='ctrlLabelBg'><ControlLabel id='controllabel'>Please input a valid query 
              using the following format: 'owner/repoName' e.g. facebook/react</ControlLabel></div> : <a></a> }
            {this.state.validationState === 'error' && this.state.errorType === 'badQuery' 
              && this.state.dropDownVal === "Users" ? <ControlLabel id='controllabel'>Please input a valid 
              username with no special characters</ControlLabel> : <a></a> }
            {this.state.validationState === 'error' && this.state.errorType === 'notFound' 
              && this.state.dropDownVal === "Users" ? <ControlLabel id='controllabel'>User not found on 
              GitHub</ControlLabel> : <a></a> }
            {this.state.validationState === 'error' && this.state.errorType === 'notFound' 
              && this.state.dropDownVal === "Repos" ? <ControlLabel id='controllabel'> Repo not found on 
              GitHub</ControlLabel> : <a></a>}

            {this.state.validationState === 'warning' ? <ControlLabel id='controllabel'> Loading...
              </ControlLabel> : <a></a>}


          </FormGroup>
      </div>
    )
  }
}

export default SearchBar;