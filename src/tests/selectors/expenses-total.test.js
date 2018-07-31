import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const selectedExpenses = [];
  const result = selectExpensesTotal(selectedExpenses);
  expect(result).toBe(0);
});

test('should correctly add up single expense', () => {
  const selectedExpenses = [expenses[0]];
  const result = selectExpensesTotal(selectedExpenses);
  expect(result).toBe(195);
});

test('should correctly add up multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});