import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../assets/logo-trybe.png';

const Header = () => {
  const email = useSelector((state) => state.user.email);
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
            <span data-testid="total-field">0</span>
            <span data-testid="header-currency-field">BRL</span>
          </form>
        </nav>
      </header>
    </div>
  );
};

export default Header;
