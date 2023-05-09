import React from 'react';
import './auth.css';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"



export const AuthorizationPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    fetch('http://16.16.143.176/api/auth_token/', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((data) => {
      /*{ token, username .... role } */
      // console.log('aa', data)

      localStorage.setItem('token', data.token)
      //if (data.role === 'admin') navigate('/questionList')
      navigate('/')
    })
  } 
   
      return (
        <form className="container">
          <h4 className='auth1' >Вход</h4>
          <input 
          className="block1" 
          type="text" 
          placeholder="Логин" 
          id="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
          className="block1" 
          type="password" 
          placeholder="Пароль" 
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          />
          <button className='enter' onClick={handleLogin}><Link className='link' to='/profile'>Войти</Link></button>
          <p className='auth1-p' >Нет аккаунта? <Link className='registr' to="/auth">Зарегистрируйся</Link></p>
        </form>
      );
    }
