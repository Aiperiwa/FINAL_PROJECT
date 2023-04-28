import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header  from './components/header/Header'
import Footer  from './components/footer/Footer'
import { Layout } from './components/layout/'

import { AuthorizationPage } from './pages/auth-n'
import { RegistrationPage } from './pages/auth-end'

import { HomePage } from './pages/home'
import { ProfilePage } from './pages/profile'
import { QuestionListPage } from './pages/questionList'
import { TestPage } from './pages/test'
import { TestFormPage } from './pages/testForm'



export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/> } />
          <Route path='/auth-n' element={<AuthorizationPage/> } />
          <Route path='/auth-end' element={<RegistrationPage/> } />
          <Route path='/profile' element={<ProfilePage/> } />
          <Route path='/questionList' element={<QuestionListPage/> } />
          <Route path='/test' element={<TestPage/> } />
          <Route path='/testForm' element={<TestFormPage/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
