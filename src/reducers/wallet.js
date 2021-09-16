// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const initialState = {
  currencies: null,
  expenses: [],
};

const walletReducer = (state = initialState, action) => {
  const newExpenses = [...state.expenses];
  const { expenseIndex, newValues, currencies, newArray, expense, expenses } = action;
  switch (action.type) {
  case 'GET_EXPENSES':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        expenses,
      ],
    };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, expense],
    };
  case 'DELETE_EXPENSE':
    newExpenses.splice(expenseIndex, 1);
    return {
      ...state,
      expenses: newExpenses,
    };
  case 'EDIT_EXPENSE':
    newExpenses[expenseIndex] = newValues;
    return {
      ...state,
      expenses: newExpenses,
    };
  case 'GET_CURRENCIES':
    return {
      ...state,
      currencies,
    };
  case 'NEW_EXPENSE_ARRAY':
    return {
      ...state,
      expenses: newArray,
    };
  default:
    return state;
  }
};

export default walletReducer;
