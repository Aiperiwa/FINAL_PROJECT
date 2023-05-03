import React, { useState } from 'react';
import './auth-end.css';
import { Link } from 'react-router-dom';

export const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let nameIsValid = true;
    let passwordIsValid = true;

    if (name.length < 3) {
      setNameError('Имя пользователя должно содержать не менее 3 символов');
      nameIsValid = false;
    } else {
      setNameError('');
    }

    if (password.length < 5) {
      setPasswordError('Пароль должен содержать не менее 5 символов');
      passwordIsValid = false;
    } else {
      setPasswordError('');
    }

    if (nameIsValid && passwordIsValid) {
      console.log(`
        Name: ${name}
        Password: ${password}
        Confirm Password: ${confirmPassword}
        Email: ${email}
      `);
    }
  };

  return (
      <form className="container2" onSubmit={handleSubmit}>
        <h4 className="auth1">Регистрация</h4>
        <input
          className="block1"
          type="text"
          placeholder="Имя пользователя"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
        <input
          className="block1"
          type="password"
          placeholder="Пароль"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
        <input
          className="block1"
          type="password"
          placeholder="Повторить пароль"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <input
          className="block1"
          type="Email"
          placeholder="Email"
          id="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <button className="enter" type="submit">
          Зарегистрироваться
        </button>
        <p className="auth1-p">
          Уже есть аккаунт?
          <Link className="registr" to="/login">
            Войти
          </Link>
        </p>
      </form>
  );
};
