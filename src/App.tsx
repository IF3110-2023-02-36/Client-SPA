import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Logout from './components/Logout'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Logout' element={<Logout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
