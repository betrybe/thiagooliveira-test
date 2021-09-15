// Coloque aqui suas actions
import api from '../api';

export const userLogin = (email) => ({ type: 'USER_LOGIN', email });
export const getCurrencies = async (dispatch) => {
  const currenciesObject = await api.getCurrencies();
  const currencies = Object.keys(currenciesObject);
  delete currenciesObject.USDT;
  dispatch({ type: 'GET_CURRENCIES', currencies, values: currenciesObject });
};

export const deleteExpense = (expenseIndex) => ({ type: 'DELETE_EXPENSE', expenseIndex });
export const editExpense = (expenseIndex, newValues) => ({ type: 'DELETE_EXPENSE', expenseIndex, newValues });

export const addExpenses = (expenses) => ({ type: 'ADD_EXPENSES', expenses });
export const newExpenseArray = (newArray) => ({ type: 'NEW_EXPENSE_ARRAY', newArray });
