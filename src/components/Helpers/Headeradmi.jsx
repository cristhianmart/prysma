import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const Headeradmi = () => {
    return (
        <nav className='header-cont'>
            <Link to={'/'} className='header-link'>Subir imagen</Link>
            <Link className='header-link'>Portafolio</Link>
            <Link to={'/'} className='header-link'>Sobre mi</Link>
            <Link to={'/'} className='header-link'>Contacto</Link>
            <Link to={'/'}><img src={logo} alt="logo" className='header-logo' /></Link>
        </nav>
    )
}

export default Headeradmi