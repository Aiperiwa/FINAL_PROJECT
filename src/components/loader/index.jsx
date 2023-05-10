import LoaderImg  from '../../img/5a3674e16eab44.5762498915135183054533.png'
// import Style from './home.module.css'
import './loader.css'

export const Loader = () => {
  return (
    <div className='parent' >
      <img className='wheel' src={ LoaderImg } alt="loader" />
    </div>
  )
}