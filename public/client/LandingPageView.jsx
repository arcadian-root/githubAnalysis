import React from 'react';
import { render } from 'react-dom';

let LandingPageView = (props) => (
  // <div> Hello from mock </div>

  <div>
      <div className="container loginContainer vertical-center" id="backgroundDiv">
        <div className="col-md-4 col-md-offset-1" id="leftContainer">
          <div className="h1" id="upperText">Discover Your Network</div>
          <div className="h3" id="middleText"></div>
          <br />
          <a className="btn btn-success" id="loginButton" href="/auth/github/callback">Login</a>
        </div>
      </div>
    </div>
)

export default LandingPageView;