import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';


//Estados del formulario
const Login = () => {
 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');

//Estado para los errores del formulario
const [error,setError] = useState(false);

 //Funcion para validar datos del formulario 
 const validarDatos = (e) => {
    e.preventDefault ()

    if (!email.trim() || !password.trim()) {
       Swal.fire({
        title: '¡Campos vacíos!',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
        confirmButtonText: 'Entendido',
      });
    }
else if (password.length < 6 ) {
      Swal.fire({
      title: '¡Contraseña Debil!',
      text: 'La contraseña debe tener al menos 6 caracteres.',
      icon: 'warning',
      confirmButtonText: 'Entendido',
    });
}
    else {
      Swal.fire({
      title: '¡Formulario válido!',
      text: 'Todos los campos están completos.',
      icon: 'success',
      confirmButtonText: 'Continuar',
    });
  };
};




    return (
        <section className='container-register'>
            <div>
                <h1 className='tittle-register'> ¡PIZZZERIA MAMMA MIA! </h1>
                <p className='subtittle-register'> INICIA SESION </p>
            </div>
            <form className='formulario' onSubmit={validarDatos}>
                <div className='form-group' >
                    <label className='label'> E-mail </label>
                    <input type="email" name='email'  onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className='form-group'>
                    <label className='label'> Contraseña </label>
                    <input type="password" name='password'  onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                
                <div className='container-btn'>
                    <button className='btn-registro' type='submit'> INICIAR SESIÓN</button>
                </div>

                

            </form>
    
        </section>

    )
}

export default Login