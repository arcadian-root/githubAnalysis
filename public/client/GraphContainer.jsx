import React from 'react';
import Graph from './Graph';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class GraphContainer extends React.Component {
  constructor () {
    super();

    this.labelStyle = {
      'color': '#FFF', 
      'backgroundColor': '#777', 
      'fontFamily': 'Helvetica',
      'position': 'absolute', 
      'cursor': 'default',
      'padding': '10px',
      'borderRadius': '4px',
      'transformOrigin': 'center',
      'visibility': 'hidden'
    };
  }
  render () {
    let style = this.labelStyle;
    return (
      <div>
          <pre id='error' style={{ visibility: 'hidden', color: '#000' }}></pre>
          <div id='graph' className='panel-body'>
            <span id='label' style={ style }></span>
            <Graph />
          </div>
        </div>
    );
  }
}