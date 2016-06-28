import React from 'react';
import NavBar from './NavBar';

let main = (props) => (
  <div>
    <NavBar />
    <div>
      {props.children}
    </div>
  </div>
)

export default main;