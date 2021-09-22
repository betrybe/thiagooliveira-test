import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies, addExpense, editExpense } from '../actions';

const Form = ({ currentEdit, endEditing }) => {
  const dispatch = useDispatch();

  const { currencies, expenses } = useSelector((state) => state.wallet);

  const INITIAL_INPUT = {
    value: 0,
    description: '',
    currency: 'USD',
    method: 'dinheiro',
    tag: 'alimentacao',
  };

  const [input, setInput] = useState(INITIAL_INPUT);

  const handleChange = ({ target: { name, value } }) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (currentEdit >= 0) { // Modo edição
      dispatch(editExpense(currentEdit, input));
      endEditing();
    } else { // Modo adição
      dispatch(addExpense({
        id: expenses.length > 0 ? (expenses[expenses.length - 1].id + 1) : 0,
        ...input,
      }));
    }
    setInput(INITIAL_INPUT);
  };

  useEffect(() => {
    if (currentEdit >= 0) setInput(expenses[currentEdit]);
  }, [currentEdit, expenses]);

  useEffect(() => {
    if (!currencies) dispatch(getCurrencies);
  });

  return (
    <form id="expenses-form" className={ `bg-${currentEdit >= 0 ? 'success' : 'light'}` }>
      <label htmlFor="value">
        Valor
        <input
          type="text"
          id="value"
          data-testid="value-input"
          name="value"
          onChange={ handleChange }
          value={ input.value }
        />
      </label>

      <label htmlFor="currency">
        Moeda
        <select
          data-testid="currency-input"
          id="currency"
          name="currency"
          onChange={ handleChange }
          value={ input.currency }
        >
          {currencies && currencies.map((currency, i) => (
            <option
              key={ i }
              data-testid={ currency }
              value={ currency }
            >
              {currency}
            </option>))}
        </select>
      </label>
      <label htmlFor="method">
        Método de pagamento
        <select
          data-testid="method-input"
          name="method"
          id="method"
          onChange={ handleChange }
          value={ input.method }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>

        </select>
      </label>
      <label htmlFor="tag">
        Tag
        <select
          data-testid="tag-input"
          name="tag"
          id="tag"
          value={ input.tag }
          onChange={ handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
      <button
        onClick={ handleSubmit }
        type="button"
        className="btn btn-primary btn-sm"
      >
        {currentEdit >= 0 ? 'Editar despesa' : 'Adicionar despesa'}
      </button>
    </form>
  );
};

Form.propTypes = {
  currentEdit: PropTypes.number.isRequired,
  endEditing: PropTypes.func.isRequired,
};

export default Form;
