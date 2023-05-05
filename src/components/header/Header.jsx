// import NavStyle from './header.module.css'
// import { Link, NavLink } from "react-router-dom";
// import LogoSvg from '../../img/logo.png'
// import { useState } from 'react'

// const links = [
//   {
//     id: 1,
//     text: 'Главная',
//     route: '/'
//   },
//   {
//     id: 2,
//     text: 'Пройти тест',
//     route: '/test'
//   },
// ]

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen)
//   }

//   return (
//     <>
//       <div className={NavStyle.header_wrapper}>
//         <Link to="/">
//           <img className={NavStyle.logo} src={LogoSvg} alt="logotype" />
//         </Link>
//         {/* <h1>ROAD RULES</h1> */}
//         <nav className={`${NavStyle.nav} ${menuOpen ? NavStyle.active : ''}`}>
//           {
//             links.map((link) => (
//               <NavLink className={NavStyle.link} key={link.id} to={link.route} onClick={toggleMenu}>
//                 {link.text}
//               </NavLink>
//             ))
//           }
//           <a className={NavStyle.pdd} href="/PDD_KR2021.pdf">ПДД КР 2023</a>
//         <Link to='/login'>
//           <button className={NavStyle.enter}>Войти</button>
//         </Link>
//         </nav>
//         <button className={`${NavStyle.burger} ${menuOpen ? NavStyle.active : ''}`} onClick={toggleMenu}>
//           <span className={NavStyle.line}></span>
//           <span className={NavStyle.line}></span>
//           <span className={NavStyle.line}></span>
//         </button>
//       </div>
//     </>
//   )
// }

// export default Header


import NavStyle from './header.module.css'
import { Link, NavLink } from "react-router-dom";
import LogoSvg from '../../img/logo.png'
import { useState, useRef, useEffect } from 'react'

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
  const navRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [navRef])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div className={NavStyle.header_wrapper}>
        <Link to="/">
          <img className={NavStyle.logo} src={LogoSvg} alt="logotype" />
        </Link>
        <nav ref={navRef} className={`${NavStyle.nav} ${menuOpen ? NavStyle.active : ''}`}>
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
      </div>
    </>
  )
}

export default Header
