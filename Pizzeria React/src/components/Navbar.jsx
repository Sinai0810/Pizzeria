import { Link } from 'react-router-dom';
import React from 'react';


const Navbar = () => {
    const total = 25;
    const token = false;
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
                    <button className='total-navbar'>  🛒Total: {total.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    })}</button>
                </Link>
            </div>

        </div>
    );
}

export default Navbar
