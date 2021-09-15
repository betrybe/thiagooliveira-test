// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const initialState = {
  currencies: null,
  expenses: [],
  values: null,
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_EXPENSES':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.expenses,
      ],
    };
  case 'GET_CURRENCIES':
    return {
      ...state,
      currencies: action.currencies,
      values: action.values,
    };
  case 'NEW_EXPENSE_ARRAY':
    return {
      ...state,
      expenses: action.newArray,
    };
  default:
    return state;
  }
};

export default walletReducer;
