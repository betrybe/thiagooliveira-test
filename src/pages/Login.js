import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../assets/logo-trybe.png';
import actions from '../actions';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailValidator = regexEmail.test(loginData.email);
  const MIN_LEN_EMAIL = 5;
  const MIN_LEN_PWD = 6;

  const validEmail = loginData.email.length >= MIN_LEN_EMAIL && mailValidator;
  const validPwd = loginData.password.length >= MIN_LEN_PWD;

  return (
    <div className="App-header">
      <div className="login">
        <img src={ logo } alt="" width="360" />
        <input
          id="email"
          type="text"
          placeholder="Digite seu e-mail"
          className="mb-3"
          data-testid="email-input"
          onChange={ (e) => setLoginData({ ...loginData, email: e.target.value }) }
        />
        <input
          id="senha"
          type="password"
          placeholder="Senha"
          className="mb-4"
          data-testid="password-input"
          onChange={ (e) => setLoginData({ ...loginData, password: e.target.value }) }
        />
        <button
          type="button"
          className="btn"
          value="Entrar"
          disabled={ !(validEmail && validPwd) }
          onClick={ () => {
            dispatch(actions.userLogin(loginData.email));
            history.push('/carteira');
          } }
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;
