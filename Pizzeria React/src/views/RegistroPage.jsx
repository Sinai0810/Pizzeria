import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';

//Estados del formulario
const RegistroPage = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');

    //Estado para los errores del formulario
    const [error, setError] = useState(false);

    //Funcion para validar datos del formulario 
    const validarDatos = (e) => {
        e.preventDefault()

        if (!nombre.trim() || !apellido.trim() || !email.trim() || !password.trim()) {
            Swal.fire({
                title: '¡Campos vacíos!',
                text: 'Todos los campos son obligatorios',
                icon: 'error',
                confirmButtonText: 'Entendido',
            });
        }
        else if (password.length < 6) {
            Swal.fire({
                title: '¡Contraseña Debil!',
                text: 'La contraseña debe tener al menos 6 caracteres.',
                icon: 'warning',
                confirmButtonText: 'Entendido',
            });
        }
        else if (password !== confirmarPassword) {
            Swal.fire({
                title: '¡Contraseña no coinciden!',
                text: 'Las contraseñas deben coincidir.',
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
            <div className='container2-register'>
                <div>
                    <h1 className='tittle-register'> ¡Únete a la familia Mamma Mia! </h1>
                    <p className='subtittle-register'> Crea tu cuenta y comienza a disfrutar de nuestras pizzas artesanales, ofertas exclusivas y mucho más.
¡Porque más que pizza, son momentos! 🍕 </p>
                </div>
                <form className='formulario' onSubmit={validarDatos}>
                    <div className='form-group'>
                        <input type="text" name='nombre' placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} />
                    </div>
                    <div className='form-group' >
                        <input type="text" name='apellido' placeholder='Apellido' onChange={(e) => setApellido(e.target.value)} value={apellido} />
                    </div>
                    <div className='form-group' >
                        <input type="email" name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className='form-group'>
                        <input type="password" name='password' placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <div className='form-group'>
                        <input type="password" name='confirmarPassword' placeholder='Confirmar Contraseña' onChange={(e) => setConfirmarPassword(e.target.value)} value={confirmarPassword} />
                    </div>


                    <div className='container-btn'>
                        <button className='btn-registro' type='submit'> CREAR CUENTA</button>
                    </div>



                </form>
            </div>

        </section>

    )
}

export default RegistroPage; 
