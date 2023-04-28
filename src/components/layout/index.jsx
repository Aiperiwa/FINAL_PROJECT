import { Outlet } from 'react-router-dom'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import NavStyle from './layout.module.css'


export const Layout = () => {
  return (
    <div className={NavStyle.container}>
      <Header />

      <div>
        <Outlet />
      </div>
      
      <Footer />
    </div>
  )
}