import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../componenets/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseFrom correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseFrom with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
