import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Logout from './utils/Logout'
import { isLoggedIn } from './utils/LocalStorage'
import Balance from './pages/Balance'
import AvailableOrder from './pages/AvailableOrder'
import AvailableOrderDetail from './pages/AvailableOrderDetail'
import PickedOrder from './pages/PickedOrder'
import PickedOrderDetail from './pages/PickedOrderDetail'

function App() {

  return (
    <BrowserRouter>
      {isLoggedIn() ?
      <>
        <Navbar/>
        <Routes>
          <Route path='/Balance' element={<Balance/>}/>
          <Route path='/AvailableOrder' element={<AvailableOrder/>}/>
          <Route path='/AvailableOrderDetail' element={<AvailableOrderDetail/>}/>
          <Route path='/PickedOrder' element={<PickedOrder/>}/>
          <Route path='/PickedOrderDetail' element={<PickedOrderDetail/>}/>
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
