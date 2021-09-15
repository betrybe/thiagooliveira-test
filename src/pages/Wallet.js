import React from 'react';
import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import logo from '../assets/logo-trybe.png';

const Wallet = () => {
  const email = useSelector((state) => state.user.email);
  return (
    <div className="fluid-container ">
      {/* Header Component */}
      <header>
        <nav className="navbar navbar-light">
          <span href="#" className="navbar-brand">
            <img src={ logo } width="150" alt="" />
          </span>
          <form className="form-inline">
            <span className="mr-5" data-testid="email-field">
              {`E-mail: ${email}`}
            </span>
            <span data-testid="total-field">Despesa Total: R$</span>
            <span data-testid="header-currency-field">BRL</span>
          </form>
        </nav>
      </header>
      {/* Table Component */}
      <div className="bg-dark text-light form-group form-inline p-3 mb-0">
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            type="number"
            name="value"
            data-testid="value-input"
            size="5"
            className="form-control"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency" data-testid="currency-input" className="form-control">
            <option value="Teste">Teste</option>
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento:
          <select
            value={ 0 }
            id="method"
            name="method"
            data-testid="method-input"
            className="form-control"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            value={ 0 }
            id="tag"
            name="tag"
            data-testid="tag-input"
            className="form-control"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            value={ 0 }
            id="description"
            type="text"
            name="description"
            data-testid="description-input"
            size="20"
            className="form-control"
          />
        </label>
        <button type="button" className="btn btn-primary">
          Adicionar despesa
        </button>
      </div>
      {/* Table Head */}
      <table className="table bg-dark text-light table-borderless">
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de Pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Cambio utilizado</th>
            <th scope="col">Moeda de Conversão</th>
            <th scope="col">Editar Excluir</th>
          </tr>
        </thead>

        <tr>
          <td>Teste</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <FaTrashAlt className="text-danger" />
                &nbsp;&nbsp;
            <FaRegEdit className="text-primary" />
          </td>
        </tr>

      </table>
    </div>
  );
};

export default Wallet;
