import React from 'react';
import App from 'GitHub-Network-Graph';
import $ from 'jquery';

class Graph extends React.Component {
	constructor (props) {
	  super(props);
	}

	componentDidMount () {
    $.ajax({
        method: 'GET',
        url: '/user/info'
      }).done( (data) => {
        console.log(data)
        if (typeof App !== 'undefined') { 
		      if (!App.initialized) { App.init(data.username); }
    		} else { 
      		console.error('ERROR: Graph.jsx - App is not defined.\n' + 
        	'Please ensure GitHub-Network-Graph module is installed.'); 
    		}
      });
  }

  render () {
    return (<span></span>);
  }
}

export default Graph;