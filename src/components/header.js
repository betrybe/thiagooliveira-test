import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import logo from '../assets/logo-trybe.png';

const Header = () => {
  const email = useSelector((state) => state.user.email);
  const expenses = useSelector((state) => state.wallet.expenses);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(expenses.reduce((acc, curr) => {
      acc += Number(curr.exchangeRates[curr.currency].ask * curr.value);
      return acc;
    }, 0));
  }, [expenses]);

  return (
    <div className="fluid-container ">
      <header>
        <nav className="navbar navbar-light">
          <span href="#" className="navbar-brand">
            <img src={ logo } width="150" alt="" />
          </span>
          <form className="form-inline">
            <span className="mr-5" data-testid="email-field">
              { email }
            </span>
            <span data-testid="total-field">
              {total.toFixed(2)}
            </span>
            <span data-testid="header-currency-field">&nbsp;BRL</span>
          </form>
        </nav>
      </header>
    </div>
  );
};

export default Header;
