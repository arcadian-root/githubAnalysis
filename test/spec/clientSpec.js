import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import { createStore } from 'redux';
import { ControlLabel } from 'react-bootstrap';
import { mount, render, shallow } from 'enzyme';

import Main from './../../public/client/main';
import NavBar from './../../public/client/NavBar';
import GraphContainer from './../../public/client/GraphContainer';
import Graph from './../../public/client/Graph';
import Filters from './../../public/client/Filters';
import SearchBar from './../../public/client/SearchBar';


describe('Main', () => {
  const wrapper = shallow(<Main />);

  it('should be a stateless class component', () => {
    expect(React.Component.isPrototypeOf(Main)).to.be.false;
  });

  it('should render <NavBar /> component', () => {
    expect(wrapper.find(NavBar)).to.have.length(1);
  });
});


describe('GraphContainer', () => {
  const wrapper = shallow(<GraphContainer />);

  it('should be a stateful class component', () => {
    expect(React.Component.isPrototypeOf(GraphContainer)).to.be.true;
  });

  it('should render <Graph /> component', () => {
    expect(wrapper.find(Graph)).to.have.length(1);
  })
});


describe('Filters', () => {
  const wrapper = shallow(<Filters />);

  it('should be a stateful class component', () => {
    expect(React.Component.isPrototypeOf(Filters)).to.be.true;
  });
});


describe('SearchBar', () => {
  const wrapper = shallow(<SearchBar />);

  it('should invoke updateDropDown when \'Repos\' MenuItem is selected', () => {
    const onSelect = sinon.spy();
    wrapper.find('MenuItem #reposMenu').simulate('select');
    expect(onSelect.calledOnce).to.equal.true;
  });

  it('should invoke updateDropDown when \'Users\' MenuItem is selected', () => {
    const onSelect = sinon.spy();
    wrapper.find('MenuItem #usersMenu').simulate('select');
    expect(onSelect.calledOnce).to.equal.true;
  });

  it('should invoke handleValidInput when user searches users or repos', () => {
    const onKeyPress = sinon.spy();
    wrapper.find('FormControl').simulate('keypress', { which: 'abcd' });
    expect(onKeyPress.calledOnce).to.equal.true;
  });

  it('should display error message when searching is invalid', () => {
    wrapper.setState({validationState: 'error', errorType: 'badQuery', dropDownVal: 'Repos'});
    expect(wrapper.find(ControlLabel)).to.have.length(1);
    wrapper.setState({validationState: '', errorType: '',});
    expect(wrapper.find(ControlLabel)).to.have.length(0);
    wrapper.setState({validationState: 'error', errorType: 'badQuery', dropDownVal: 'Users'});
    expect(wrapper.find(ControlLabel)).to.have.length(1);
  });
})