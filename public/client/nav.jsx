import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

let nav = (props) => (
  <Navbar>
    <Nav>
      <NavItem><Link to='/'>Home</Link></NavItem>
      <NavItem><Link to='sample'>Sample</Link></NavItem>
      <NavItem><Link to='login'>Login</Link></NavItem>
    </Nav>
  </Navbar>
)

export default nav;
