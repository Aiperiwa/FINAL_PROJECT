import NavStyle from './header.module.css'
import { Link, NavLink } from "react-router-dom";
import LogoSvg from '../../img/logo.png'



const links = [

  {
    id: 2,
    text: 'Главная',
    route: '/home'
  },

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

]



const Header = () => {
  return (
    <>
      <header className={NavStyle.header}>

        <Link to="/home">
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