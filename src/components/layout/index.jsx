import { Outlet } from 'react-router-dom'
import { Nav } from '../nav'

export const Layout = () => {
  return (
    <div>
      <Nav />

      <div>
        <Outlet />
      </div>
    </div>
  )
}