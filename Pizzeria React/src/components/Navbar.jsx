import React from 'react'

const Navbar = () => {
    const total = 25;
    const token = false;
    return (
        <div className='navbar'>

            <button className='nav-btn'> 🍕Inicio </button>

            {token ? ( 
                <>
                <button  className='nav-btn' > 🔒Perfil </button>
                <button  className='nav-btn' > 🔒Logout </button>

                </>
            ) : ( 
                <> 
                <button  className='nav-btn' > 🔐Login</button>
                <button  className='nav-btn' > 🔐Registrarse</button>
                </>

            )}
            <button className='total'>  🛒Total: {total.toLocaleString ('en-US', {
                style:'currency',
                currency : 'USD'
            })}</button>
            
        </div>
    );
}

export default Navbar
