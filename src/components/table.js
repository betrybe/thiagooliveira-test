import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

const Table = ({ handleEdit }) => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.wallet.expenses);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => {
          const {
            id,
            description,
            tag,
            method,
            value,
            currency,
            exchangeRates,
          } = expense;
          const { name: currencyName, ask: currencyAsk } = exchangeRates[currency];

          return (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{Number(value)}</td>
              <td>{currencyName.split('/')[0]}</td>
              <td>{Number(currencyAsk).toFixed(2)}</td>
              <td>{Number(currencyAsk * value).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  data-testid="delete-btn"
                  onClick={ () => dispatch(deleteExpense(index)) }
                >
                  <FaTrashAlt />
                </button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  data-testid="edit-btn"
                  className="btn btn-primary btn-sm"
                  onClick={ () => handleEdit(index) }
                >
                  <FaRegEdit />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  handleEdit: PropTypes.func.isRequired,
};
export default Table;
