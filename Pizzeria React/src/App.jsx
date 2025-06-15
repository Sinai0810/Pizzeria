import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <Navbar />
      <Cart />
      {/*<Home />/*}
      {/*<Register/> */}
      {/*<Login/> */}
      <Footer />
    </div>

  )
}

export default App
