import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './navBar'
import Cart from './cart'
import { Route ,Routes} from 'react-router'
import Products from './products'
function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
    </div>
  )
}

export default App
