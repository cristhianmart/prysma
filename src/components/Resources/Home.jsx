import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/6.jpg'
import logo from '../../assets/images/logo.png'
import wsp from '../../assets/images/whatsapp.svg'
import insta from '../../assets/images/instagram.svg'


const Home = () => {

    return (
        <section className='main-home'>
            <div className='img-home'>
                <img src={img2} alt="" />
            </div>
            <aside className='menu-home'>
                <img src={logo} alt="Logo" />
                <Link to={'/calculadora'}>Portafolio</Link>
                <Link to={'/sobremi'}>Sobre mi</Link>
                <Link to={'/contacto'}>Contacto</Link>
                <section className='footer-home'>
                    <div className='footer-icon'>
                        <a href=""><img src={wsp} alt="" /></a>
                        <a href=""><img src={insta} alt="" /></a>
                    </div>
                    <div>
                        <p> &copy; Todos los derechos reservados - 2023 </p>
                    </div>
                </section>
            </aside>
            <div className='img-home'>
                <img src={img1} alt="foto" />
            </div>
        </section>
    )
}

export default Home