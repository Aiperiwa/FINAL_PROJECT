import { Outlet } from 'react-router-dom'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'

export const Layout = () => {
  return (
    <div>
      <Header />

      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}