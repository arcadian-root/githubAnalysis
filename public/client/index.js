import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import d3 from './../../lib/d3'
import $ from 'jquery';
import chart from './../assets/statChartBuilder';

// import other components
import Main from './main';
import Mock from './mock';
import Sample from './sample';

// <Route path='/' component={Login}/>
// <Route path='/login' component={Login}/>
// <Route component={Main}>
//   <Route path='create' component={Form}/>
//   <Route path='dashboard' component={Feed}/>
//   <Route path='post/:arcId' component={FacebookPost}/>
// </Route>
render((
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path='/' component={Mock} /> 
      <Route path='/sample' component={Sample} />
    </Route>
  </Router>
), document.getElementById('container'));


// mock data
// arr[0]: average fork # (y)
// arr[1]: followers # (x)
const mockForkData = [
  [100, 300],
  [200, 500],
  [400, 100],
  [500, 1600],
  [1800, 1000],
  [500, 10100],
  [1500, 10500],
  [1300, 10200],
  [1200, 3000],
  [200, 10600],
  [500, 100],
  [50, 4000],
  [25, 10],
  [900, 17511],
  [50, 10000],
  [30, 11500],
  [2000, 10000],
  [2000, 10000],
  [2000, 10000],
  [2000, 100],
  [2000, 100],
  [2000, 1000],
  [2, 1],
  [4, 2],
  [6, 3],
  [8, 4],
  [10, 5],
  [1300, 18000]
];

// chart('d3Graph', 'graph1', mockForkData, 25000, 'Followers', 2000, 'Average Fork');

// chart('d3Graph2', 'graph2', [[1, 2], [100, 200], [1000, 2000], [10000, 20000]], 30000, undefined, 15000);

// $.ajax({
//   method: 'GET',
//   url: 'https://api.github.com/search/users?q=followers:%3E700&sort=followers'
// }).done( (data) => {
//   let topUsers = [];
//   for ( var users of data.items ) {
//     console.log(users.login);
//     $.ajax({
//       method: 'GET',
//       url: `https://api.github.com/users/${users.login}`
//     }).done ( (user) => {
//       topUsers.push(user);
//       console.log(user.followers);
//       console.log(topUsers);
//     })
//   }
// });