import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../componenets/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

