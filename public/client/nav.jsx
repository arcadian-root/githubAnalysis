import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';


const NavView = (props) => (
  <Navbar>
    <Nav>
      <Link to='/'>Home</Link>
      <Link to='sample'>Sample</Link>

      {props.userInfo ? <a href='/logout'>Logout</a> : <a href='/auth/github/callback'>Login</a>}
      
    </Nav>
  </Navbar>
)

class NavContainer extends React.Component { 
  constructor(props, context) {
    super(props, context);
    this.state = {
      userInfo: null
    }
  }

  componentDidMount () {
    console.log(this.context.store);
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
      <NavView userInfo={this.state.userInfo} />
    )
  }
}

NavContainer.contextTypes = {
  store: React.PropTypes.object
}

export default NavContainer;
