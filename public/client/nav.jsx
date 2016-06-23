import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';

class Navigator extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null
    }
  }

  componentDidMount () {
    $.ajax({
      method: 'GET',
      url: '/user/info'
    }).done( (data) => {
      console.log(data)
      this.setState({userInfo: data});
    });
  }

  render () {
   return (
      <Navbar>
        <Nav>
          <Link to='/'>Home</Link>
          <Link to='sample'>Sample</Link>

          {this.state.userInfo ? <a href='/logout'>Logout</a> : <a href='/auth/github/callback'>Login</a>}
          
        </Nav>
      </Navbar>
    )
  }
}

export default Navigator;
