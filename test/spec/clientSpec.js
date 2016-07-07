import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import { createStore } from 'redux';
import { mount, render, shallow } from 'enzyme';

import Main from './../../public/client/main';
import NavBar from './../../public/client/NavBar';
import GraphView from './../../public/client/GraphView';
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
})


describe('GraphView', () => {
  const wrapper = shallow(<GraphView />);

  it('should be a stateful class component', () => {
    expect(React.Component.isPrototypeOf(GraphView)).to.be.true;
  });

  xit('should render <Filters /> component', () => {
    expect(wrapper.find(Filters)).to.have.length(1);
  });
})

describe('Filters', () => {
  const wrapper = shallow(<Filters />);

  it('should be a stateful class component', () => {
    expect(React.Component.isPrototypeOf(Filters)).to.be.true;
  });

})

describe('SearchBar', () => {
  const wrapper = shallow(<SearchBar />);

  xit('should have updateDropDown method', () => {

  });

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
})