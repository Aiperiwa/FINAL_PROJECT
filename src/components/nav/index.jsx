import { NavLink } from "react-router-dom";



const links = [
  {
    id: 1, 
    text: 'Auth',
    route: '/auth-n'
  },
  {
    id: 2, 
    text: 'home',
    route: '/home'
  },
  {
    id: 3, 
    text: 'Profile',
    route: '/profile'
  },
  {
    id: 4, 
    text: 'questionList',
    route: '/questionList-n'
  },
  {
    id: 5, 
    text: 'test',
    route: '/test'
  },
  {
    id: 6, 
    text: 'testForm',
    route: '/testForm'
  }
]


export const Nav = () => {
  return (
    <ul className="nav">
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

