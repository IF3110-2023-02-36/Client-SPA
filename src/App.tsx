import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Logout from './components/Logout'
import { isLoggedIn } from './utils/LocalStorage'

function App() {

  return (
    <BrowserRouter>
      {isLoggedIn() ?
      <>
        <Navbar/>
        <Routes>
          <Route path='/Logout' element={<Logout/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </>
      :
      <>
        <Routes>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='*' element={<Login/>}/>
        </Routes>
      </>
    }
    </BrowserRouter>
  )
}

export default App
