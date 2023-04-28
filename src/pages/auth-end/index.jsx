import React from 'react';
import './auth-end.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';


export const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
 

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
    console.log(`
      Name: ${name}
      Password: ${password}
      Confirm Password: ${confirmPassword}
      Email: ${email}
    `);
  };

  return (
    <div className="container2">
      <h1 className='auth1' >Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="block1"
          type="text"
          placeholder="Имя пользователя"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          className="block1"
          type="password"
          placeholder="Пароль"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
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
        <button className='enter' type="submit">Зарегистрироваться</button>
      </form>
      <p className='auth1-p'>
        Уже есть аккаунт?
        <Link to="/auth-n">Войти</Link>
      </p>
    </div>
  );
}

