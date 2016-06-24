import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';
import { connect } from 'react-redux';
import actions from './../redux/actions'

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfoState // state in 'store' pbject
  }
}

class Navigator extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    $.ajax({
        method: 'GET',
        url: '/user/info'
      }).done( (data) => {
        console.log(data)
        this.props.dispatch(actions.addUserInfo(data));
      });
  }

  render () {
    return (
      <Navbar>
        <Nav>
          <Link to='/'>Home</Link>
          <Link to='sample'>Sample</Link>

          {this.props.userInfo ? <a href='/logout'>Logout</a> : <a href='/auth/github/callback'>Login</a>}
          
        </Nav>
      </Navbar>
    )
  }
}

export default connect(mapStateToProps)(Navigator);
