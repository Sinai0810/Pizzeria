import React from 'react'
import imgPerfil from '../assets/imgs/img-perfil.jpg'

const PerfilPage = () => {
  return (
    <section className='perfil-container'>
      <div className='perfil-informacion'>
        <form className='formulario-perfil'>

          <div className='img-container'>
            <img src={imgPerfil} alt="" />
          </div>


          <h1>Informacion de perfil</h1>

          {/* container de nombre y apellido juntos  */}
          <div className='form-container' >
            <div className='form-item'>
              <label> Nombre</label>
              <input type="text" name='nombre' placeholder='Alana' disabled />
            </div>


            <div className='form-container'>
              <label> Apellido</label>
              <input type="text" name='apellido' value='Liz' disable/>
            </div>
          </div>
        
           {/* container de email */}
          <div className='form-container'>
            <div className='form-item'>
              <label> Email</label>
              <input type="text" name='Email' placeholder='Aliz2024@gmail.com' disabled/>
            </div>
          </div>

          <div className='container-btn'>
            <button className='btn-registro' type='submit'> Cerrar Sesion</button>
          </div>



        </form>

      </div>

    </section>

  )
}

export default PerfilPage
