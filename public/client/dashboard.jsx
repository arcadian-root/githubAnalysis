import React from 'react';
import { render } from 'react-dom';
import UserRepoGraph from './userRepoGraph';
import Organization from './organization';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        Dashboard is under conrstruction ...
        <UserRepoGraph />
        <Organization />
      </div>
    )
  }
}

export default Dashboard;