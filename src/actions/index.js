// Coloque aqui suas actions
import api from '../api';

export const userLogin = (email) => ({ type: 'USER_LOGIN', email });
export const getCurrencies = async (dispatch) => {
  const currencies = await api.getCurrencies();
  delete currencies.USDT;
  dispatch({ type: 'GET_CURRENCIES', currencies: Object.keys(currencies) });
};

export const deleteExpense = (expenseIndex) => ({
  type: 'DELETE_EXPENSE',
  expenseIndex,
});
export const editExpense = (expenseIndex, newValues) => ({
  type: 'EDIT_EXPENSE',
  expenseIndex,
  newValues,
});

export const addExpense = (expense) => async (dispatch) => {
  const currencies = await api.getCurrencies();
  delete currencies.USDT;

  expense.exchangeRates = currencies;

  dispatch({ type: 'ADD_EXPENSE', expense });
};
