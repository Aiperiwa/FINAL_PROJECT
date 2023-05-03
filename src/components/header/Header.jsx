import NavStyle from './header.module.css'
import { Link, NavLink } from "react-router-dom";
import LogoSvg from '../../img/logo.png'
import { useState } from 'react'

const links = [
  {
    id: 1,
    text: 'Главная',
    route: '/'
  },
  {
    id: 2,
    text: 'Пройти тест',
    route: '/test'
  },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header className={NavStyle.header}>
        <Link to="/">
          <img className={NavStyle.logo} src={LogoSvg} alt="logotype" />
        </Link>
        {/* <h1>ROAD RULES</h1> */}
        <nav className={`${NavStyle.nav} ${menuOpen ? NavStyle.active : ''}`}>
          {
            links.map((link) => (
              <NavLink className={NavStyle.link} key={link.id} to={link.route} onClick={toggleMenu}>
                {link.text}
              </NavLink>
            ))
          }
          <a className={NavStyle.pdd} href="/PDD_KR2021.pdf">ПДД КР 2023</a>
        <Link to='/login'>
          <button className={NavStyle.enter}>Войти</button>
        </Link>
        </nav>
        <button className={`${NavStyle.burger} ${menuOpen ? NavStyle.active : ''}`} onClick={toggleMenu}>
          <span className={NavStyle.line}></span>
          <span className={NavStyle.line}></span>
          <span className={NavStyle.line}></span>
        </button>
      </header>
    </>
  )
}

export default Header
