import { Route, Routes } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import HomePage from './views/HomePage'
import RegistroPage from './views/RegistroPage'
import PerfilPage from './views/PerfilPage'
import LoginPage from './views/LoginPage'
import CartPage from './views/CartPage'
import PizzaPage from './views/PizzaPage'
import NotFoundPage from './views/NotFoundPage'
import Layout from './Layout.jsx'
import { CartProvider } from './Context/CartContext.jsx';


function App() {
  const [count, setCount] = useState(0)
  // shift + opt + f = ordenar el codigo //
  // Alt + Z = ajustar (acortar) el texto en el editor // 
  return (

    <div>
      <CartProvider>
      <Routes>
        {/* Layout es el componente que contiene el navbar y el footer*/}
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/registro" element={<RegistroPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/pizza/001" element={<PizzaPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          {/* Ruta comodin. cualquier URL que no sea reconocida mostrara NotFoundPage */}
          <Route path="*" element={<NotFoundPage />} />


        </Route>
      </Routes>
      </CartProvider>




    </div>

  )
}

export default App
