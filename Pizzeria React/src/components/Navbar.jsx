import { Link } from 'react-router-dom';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';


const Navbar = () => {
  const token = false
  const { cartItems, getTotal } = useContext(CartContext);
  const total = getTotal();
    return (
        <div className='navbar'>

            <Link to='/'>
                <button className='nav-btn'> 🍕Inicio </button>
            </Link>
            {token ? (
                <>
                    <Link to='/perfil'>
                        <button className='nav-btn' > 🔒Perfil </button>
                    </Link>

                    <Link to='/login'>
                        <button className='nav-btn' > 🔒Cerrar Sesion </button>
                    </Link>

                </>
            ) : (
                <>
                    <Link to='/login'>
                        <button className='nav-btn' > 🔐Iniciar Sesion</button>
                    </Link>

                    <Link to='/registro'>
                        <button className='nav-btn' > 🔐Registrarse</button>
                    </Link>

                </>

            )}
            <div className='nav-right'>
                <Link to='/cart'>
                    <button className='total-navbar'>  🛒Total: {total.toLocaleString('en-ES', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
    maximumFractionDigits: 0
                    })} </button>
                </Link>
            </div>

        </div>
    );
}

export default Navbar
