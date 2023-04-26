import NavStyle from './header.module.css'
import { NavLink } from "react-router-dom";



const links = [
  {
    id: 1,
    text: 'Тест',
    route: '/testForm'    
  },
  {
    id: 2,
    text: 'Главная',
    route: '/home'
  },
  {
    id: 3,
    text: 'Профиль',
    route: '/profile'
  },
  {
    id: 4,
    text: 'Вопросы',
    route: '/questionList'
  },
  {
    id: 5,
    text: 'Пройти тестирование',
    route: '/test'
  },
  {
    id: 6,    
    text: 'Авторизация',
    route: '/auth-n'
  }
]



const Header = () => {
  return (
    <ul className={NavStyle.nav}>
      {
        links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.route}>
              <button>{link.text}</button>
            </NavLink>
          </li>
        ))
      }
    </ul>
  )
}

export default Header