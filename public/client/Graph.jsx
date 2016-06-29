import React from 'react';
import App from 'GitHub-Network-Graph';

export default class Graph extends React.Component {
  render () {
    if (typeof App !== 'undefined') { 
      if (!App.initialized) { App.init(); } // super hacky but who cares 
    } else { 
      console.error('ERROR: Graph.jsx - App is not defined.\n' + 
        'Please ensure GitHub-Network-Graph module is installed.'); 
    }
    return (<span></span>);
  }
}