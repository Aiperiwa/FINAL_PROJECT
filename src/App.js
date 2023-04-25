import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header  from '../src/components/utils/header/Header'
import Footer  from '../src/components/utils/footer/Footer'


export const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
