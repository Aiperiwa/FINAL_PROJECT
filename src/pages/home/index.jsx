import HomeImage  from '../../img/main.jpg'
import NavStyle from './home.module.css'


export const HomePage = () => {
  return (
    <div>
      <img className={NavStyle.homeImg} src={ HomeImage } alt="image" />
    </div>
  )
}