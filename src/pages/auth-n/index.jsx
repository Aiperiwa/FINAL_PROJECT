import React from 'react';
import './auth.css';
import { Link } from 'react-router-dom'


export const AuthorizationPage = () => {
   
      return (
        <div className="container">
          <h1 className='auth1' >Вход</h1>
          <input className="block1" type="text" placeholder="Логин" id="name" />
          <input className="block1" type="password" placeholder="Пароль" id="password" />
          <button className='enter'>Войти</button>
          <p className='auth1-p' >Нет аккаунта? <Link to="/auth-end">Зарегистрируйся</Link></p>
        </div>
      );
    }
