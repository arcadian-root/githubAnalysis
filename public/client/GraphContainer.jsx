import React from 'react';
import Graph from './Graph';

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
      <div className='panel panel-default'>
        <pre id='error' style={{ visibility: 'hidden', color: '#000' }}></pre>
        <span id='label' style={ style }></span>
        <div id='graph' className='panel-body'></div>
        <Graph />
      </div>
    );
  }
}