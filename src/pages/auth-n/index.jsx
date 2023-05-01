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
    fetch('http://localhost:1717/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((data) => {
      /*{ token, username .... role } */
      console.log('aa', data)

      localStorage.setItem('token', data.token)
      if (data.role === 'admin') navigate('/questionList')
      else navigate('/')
    })
  } 
   
      return (
        <form className="container">
          <h1 className='auth1' >Вход</h1>
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
          <button className='enter' onClick={handleLogin}>Войти</button>
          <p className='auth1-p' >Нет аккаунта? <Link className='registr' to="/auth-end">Зарегистрируйся</Link></p>
        </form>
      );
    }
