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

            // <img id='landingpageimg' src='./static/assets/landingpageimg.png'></img>
        // <div className="container loginContainer vertical-center" id="backgroundDiv">
        //   <div className="col-md-4 col-md-offset-1" id="leftContainer">
        //     <div className="h1" id="upperText">Discover Your Network</div>
        //     <div className="h3" id="middleText"></div>
        //     <br />
        //     <a className="btn btn-success" id="loginButton" href="/auth/github/callback">Log in with GitHub</a>
        //   </div>
        // </div>


        // <Jumbotron id="jumbo">
        //   <Grid>
        //   <Col xs={11} xsOffset={1}>
        //     <img id='landingpageimg' src='./static/assets/landingpageimg.png'></img>
        //     <h1>GitNet</h1>
        //     <p>Discover your GitHub Network</p>
        //     <p><Button bsStyle="primary">Log in with GitHub</Button></p>
        //   </Col>
        // </Grid>
        // </Jumbotron>