import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../componenets/ExpenseDashboardPage';

test('should render ExpenseDashboardPage correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});

