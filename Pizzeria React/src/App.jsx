import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
        <Navbar />
      <Home />
      <Footer />
    </div>

  )
}

export default App
