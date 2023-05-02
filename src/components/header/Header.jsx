import NavStyle from './header.module.css'
import { Link, NavLink } from "react-router-dom";
import LogoSvg from '../../img/logo.png'



const links = [
  // {
  //   id: 1,
  //   text: 'Тест',
  //   route: '/testForm'
  // },
  {
    id: 2,
    text: 'Главная',
    route: '/'
  },
  // {
  //   id: 3,
  //   text: 'Профиль',
  //   route: '/profile'
  // },
  {
    id: 4,
    text: 'ПДД КР',
    route: '/questionList'
  },
  {
    id: 5,
    text: 'Пройти тестирование',
    route: '/test'
  },
  // {
  //   id: 6,
  //   text: 'Войти',
  //   route: '/auth-n'
  // }
]



const Header = () => {
  return (
    <>
      <header className={NavStyle.header}>

        <Link to="/">
          <img className={NavStyle.logo} src={ LogoSvg } alt="logotype" />
        </Link>
        {
          links.map((link) => (
              <NavLink className={NavStyle.nav} key={link.id} to={link.route}>
                {link.text}
              </NavLink>
          ))
        }
  
          <Link to='/login'>
          <button className={NavStyle.enter}>Войти</button>
          </Link>
          
    
        
      </header>
    </>
  )
}

export default Header