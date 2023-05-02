import './footer.module.css'
import NavStyle from './footer.module.css'
import { Link } from "react-router-dom";
import LogoSvg from '../../img/logo.png'


const Footer = () => {
  return (
    <div className={NavStyle.footer}>
      <Link to="/">
        <img className={NavStyle.logo} src={LogoSvg} alt="logotype" />
      </Link>
      <p>2023 "Road Rules". Все права защищены</p>
    </div>
  )
}
export default Footer