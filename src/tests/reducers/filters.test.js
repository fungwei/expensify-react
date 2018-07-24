import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER', 
    text: 'hello'
  });
  expect(state.text).toBe('hello');
});

test('should set startDate filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE', 
    startDate: moment(1000)
  });
  expect(state.startDate).toEqual(moment(1000));
});

test('should set endDate filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE', 
    endDate: moment(2000)
  });
  expect(state.endDate).toEqual(moment(2000));
});