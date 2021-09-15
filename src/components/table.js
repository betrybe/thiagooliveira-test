import React from 'react';
import { useSelector } from 'react-redux';

const Table = () => (
  <table>
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
      <tr>
        <td>Teste</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>
          {/* <FaTrashAlt className="text-danger" />
          &nbsp;&nbsp;
        <FaRegEdit className="text-primary" /> */}
        </td>
      </tr>
    </tbody>
    {/* {expenses.map()} */}
  </table>

);

export default Table;

// <div className="bg-dark text-light form-group form-inline p-3 mb-0">
//     <label htmlFor="value">
//     Valor:
//     <input
//       id="value"
//       type="number"
//       name="value"
//       data-testid="value-input"
//       size="5"
//       className="form-control"
//     />
//   </label>
//     <label htmlFor="currency">
//     Moeda:
//     <select name="currency" id="currency" data-testid="currency-input" className="form-control">
//       <option value="Teste">Teste</option>
//     </select>
//   </label>
//     <label htmlFor="method">
//     Método de Pagamento:
//     <select
//       value={ 0 }
//       id="method"
//       name="method"
//       data-testid="method-input"
//       className="form-control"
//     >
//       <option value="Dinheiro">Dinheiro</option>
//       <option value="Cartão de crédito">Cartão de crédito</option>
//       <option value="Cartão de débito">Cartão de débito</option>
//     </select>
//   </label>
//     <label htmlFor="tag">
//     Categoria:
//     <select
//       value={ 0 }
//       id="tag"
//       name="tag"
//       data-testid="tag-input"
//       className="form-control"
//     >
//       <option value="Alimentação">Alimentação</option>
//       <option value="Lazer">Lazer</option>
//       <option value="Trabalho">Trabalho</option>
//       <option value="Transporte">Transporte</option>
//       <option value="Saúde">Saúde</option>
//     </select>
//   </label>
//     <label htmlFor="description">
//     Descrição:
//     <input
//       value={ 0 }
//       id="description"
//       type="text"
//       name="description"
//       data-testid="description-input"
//       size="20"
//       className="form-control"
//     />
//   </label>
//     <button type="button" className="btn btn-primary">
//     Adicionar despesa
//   </button>
//   </div>;
// { /* Table Head */ }
//   <table className="table bg-dark text-light table-borderless">
//   <thead>
//       <tr>
//       <th scope="col">Descrição</th>
//       <th scope="col">Tag</th>
//       <th scope="col">Método de Pagamento</th>
//       <th scope="col">Valor</th>
//       <th scope="col">Moeda</th>
//       <th scope="col">Cambio utilizado</th>
//       <th scope="col">Moeda de Conversão</th>
//       <th scope="col">Editar Excluir</th>
//     </tr>
//     </thead>

//   <tr>
//       <td>Teste</td>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//       <td>@mdo</td>
//       <td>@mdo</td>
//       <td>@mdo</td>
//       <td>
//       <FaTrashAlt className="text-danger" />
//          &nbsp;&nbsp;
//       <FaRegEdit className="text-primary" />
//     </td>
//     </tr>

// </table>;
