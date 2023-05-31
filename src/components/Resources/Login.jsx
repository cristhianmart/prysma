import {useState } from 'react';
import login from '../../assets/images/login2.JPG'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const redireccion = useNavigate();
    const [usuario, setUsuario] = useState('')
    const [contraseña, setContraseña] = useState('')

    function validar (user, password) {
        if (user=='cristhian' && password=='1234'){
                redireccion('/subirimg');
        } 

    }
    return (
        <section className='login'>
            <section className='login-cont'>
                <section className='img-cont'>
                    <img src={login} alt="Fotos de Login" />
                </section>
                <form className='form-cont'>
                    <input type="text" placeholder='Ingrese nombre de usuario' className='login-input' onChange={(e)=>setUsuario(e.target.value)} />
                    <input type="password" placeholder='Ingrese contraseña' className='login-input' onChange={(e)=>setContraseña(e.target.value)} />
                    <input type='button' className='boton-login'onClick={()=>(validar(usuario, contraseña))} value={'ingresar'}/>
                </form>
            </section>

            <div className='burbujas'></div>
            <div className='burbujas'></div>
            <div className='burbujas'></div>
            <div className='burbujas'></div>
            <div className='burbujas'></div>
            <div className='burbujas'></div>
            <div className='burbujas'></div>
            <div className='burbujas'></div>
            <div className='burbujas'></div>
            <div className='burbujas'></div>

        </section>
    )
}

export default Login