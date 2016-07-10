import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import d3 from './../../lib/d3'
import $ from 'jquery';
import chart from './../assets/statChartBuilder';

import store from './../redux/store';

// import other components
import Main from './main';
import LandingPageView from './LandingPageView';
import GraphView from './GraphView';

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={Main}>
        <Route path='/' component={LandingPageView} /> 
        <Route path='/graph' component={GraphView} />
      </Route>
    </Router>
  </Provider> 
), document.getElementById('root'));