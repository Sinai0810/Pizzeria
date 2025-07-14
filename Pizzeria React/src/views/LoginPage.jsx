import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validarDatos = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      Swal.fire({
        title: '¡Campos vacíos!',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
        confirmButtonText: 'Entendido',
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        title: '¡Contraseña Débil!',
        text: 'La contraseña debe tener al menos 6 caracteres.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
      });
      return;
    }

    // ✅ Activamos el token y redirigimos al perfil
    login();
    navigate('/perfil');
  };

  return (
    <section className='container-register'>
      <div className='container2-register'>
        <h1 className='tittle-register'>¡Bienvenido de nuevo a Mamma Mia!</h1>
        <p className='subtittle-register'>¿Aún no tienes cuenta? <Link to='/registro'> ¡Regístrate! </Link> </p>

        <form className='formulario' onSubmit={validarDatos}>
          <div className='form-group'>
            <input 
              type='email'
              name='email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              placeholder='Contraseña'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className='container-btn'>
            <button className='btn-registro' type='submit'>
              INICIAR SESIÓN
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
