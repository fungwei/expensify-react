import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'asdadasdsa',
    description: 'Jan Rent',
    note: 'This was the payment for Jan for Maple',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};