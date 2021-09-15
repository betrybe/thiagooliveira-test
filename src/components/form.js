import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies } from '../actions';

const Form = () => {
  const dispatch = useDispatch();

  const { currencies, values, expenses } = useSelector((state) => state.wallet);

  const [selected, setSelected] = useState('USD');

  const [newExpense, setNewExpense] = useState({
    id: '',
    value: 0,
    description: '',
    currency: 'USD',
    method: '',
    tag: '',
    exchangeRates: {},
  });

  function handleChange({ target }) {
    setNewExpense({
      ...newExpense,
      [target.name]: target.value,
    });
  }

  useEffect(() => {
    if (!currencies) dispatch(getCurrencies);
  }, []);

  return (
    <form onChange={ handleChange } id="expenses-form">
      <h1>{values ? values[selected].bid : 'Não carregou'}</h1>
      <label htmlFor="value">
        Valor
        <input
          type="text"
          id="value"
          data-testid="value-input"
          name="value"
        // value={ newExpense.value }
        />
      </label>
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name="description"
          id="description"
          data-testid="description-input"
          // value={ newExpense.description }
        />
      </label>
      <label htmlFor="currency">
        Moeda
        <select
          data-testid="currency-input"
          id="currency"
          name="currency"
          onChange={ ({ target: { value } }) => setSelected(value) }
        // value={ newExpense.currency }
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
        >
          <option value="dinheiro">Dinheiro</option>
          <option value="cartao-de-credito">Cartão de crédito</option>
          <option value="cartao-de-debito">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag">
        Tag
        <select
          data-testid="tag-input"
          name="tag"
          id="tag"
        >
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
      {/* {editing
        ? (
          <button
            onClick={ sendEditedExpense }
            type="button"
          >
            Editar despesa
          </button>)
        : (
          <button
            onClick={ handleSendExpenses }
            type="button"
          >
            Adicionar despesa
          </button>
        )} */}
    </form>
  );
};

export default Form;
