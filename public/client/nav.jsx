import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

let nav = (props) => (
  <Navbar>
    <Nav>
      <Link to='/'>Home</Link>
      <Link to='sample'>Sample</Link>
      <a href='/auth/github/callback'>Login</a>
      <a href='/logout'>Logout</a>
    </Nav>
  </Navbar>
)

export default nav;
