import React from 'react';
import { render } from 'react-dom';
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class LandingPageView extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount(){
    document.body.style.background = "url('static/assets/background1.jpg') top fixed";
    document.body.style.backgroundColor = "#E5EFF8";
    document.body.style.backgroundSize = "cover"; 
  }

  render() {
    return(
      <div>
        <div className="container" id="backgroundDiv">
        <Jumbotron id="jumbo">
          <Grid>
          <Col xs={6}>
            <div className="h1" id="upperText">GitNet</div>
            <div className="h4" id="middleText">Discover your GitHub network. Find those who have worked on similar projects as you.</div>
            <br />
            <a className="btn btn-success" href="/auth/github/callback">Log in with GitHub</a>
          </Col>
          <Col xs={4}>
          </Col>
          </Grid>
          </Jumbotron>
        </div>
      </div>
    )
  }
}

export default LandingPageView;