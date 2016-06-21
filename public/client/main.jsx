import React from 'react';
import Nav from './nav'

let main = (props) => (
  <div>
    <Nav />
    <div>
      {props.children}
    </div>
  </div>
)

export default main;