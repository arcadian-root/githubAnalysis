import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';
import { connect } from 'react-redux';
import actions from './../redux/actions';
import SearchBar from './SearchBar';

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
    <Navbar className="navbar navbar-default light-themed-background">
      <Grid>
      <Row className="show-grid">
        <Col xs={2} md={2}><a href='/'><img src="./static/assets/logo.png" className="logo" /></a></Col>
        <Col xs={8} md={8}>
          {this.props.userInfo ? <SearchBar /> : <a></a>}
        </Col>

      <Col xs={2} md={2}>
        {this.props.userInfo ? <a className="navbar-btn pull-right" href='/logout'>Logout</a> : <a></a>}
        {this.props.userInfo ? <img src={this.props.userInfo._json.avatar_url} className="profPic pull-right" /> : <a></a> }
      </Col>
      </Row>
    </Grid>
  </Navbar>
    )
  }
}

export default connect(mapStateToProps)(Navigator);
