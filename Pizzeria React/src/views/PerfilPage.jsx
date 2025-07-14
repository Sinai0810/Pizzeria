import React, { useContext } from 'react';
import imgPerfil from '../assets/imgs/img-perfil.jpg';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const PerfilPage = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();         // Cambiar token a false
    navigate('/login'); // Redirigir a login o donde quieras
  };

  return (
    <section className='perfil-container'>
      <div className='perfil-informacion'>
        <form className='formulario-perfil'>
          <div className='img-container'>
            <img src={imgPerfil} alt='' />
          </div>

          <h1>Información de perfil</h1>

          <div className='form-container'>
            <div className='form-item'>
              <label> Nombre </label>
              <input type='text' name='nombre' placeholder='Alana' disabled />
            </div>

            <div className='form-item'>
              <label> Apellido </label>
              <input type='text' name='apellido' value='Welch' disabled />
            </div>
          </div>

          <div className='form-container'>
            <div className='form-item'>
              <label> Email </label>
              <input type='text' name='Email' placeholder='Aliz2024@gmail.com' disabled />
            </div>
          </div>

          <div className='container-btn'>
            <button className='btn-registro' type='button' onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PerfilPage;
