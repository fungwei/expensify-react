import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../componenets/ExpensesSummary';

test('should render ExpensesSummary with expenses', ()=>{
  const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={1235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});