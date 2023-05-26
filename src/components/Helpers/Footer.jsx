import wsp from '../../assets/images/whatsapp.svg'
import insta from '../../assets/images/instagram.svg'


const Footer = () => {
  return (
    <footer className="footer-cont">
           <section className='footer-home'>
                    <div className='footer-icon'>
                        <a href=""><img src={wsp} alt="" /></a>
                        <a href=""><img src={insta} alt="" /></a>
                    </div>
                    <div>
                        <p> &copy; Todos los derechos reservados - 2023 </p>
                    </div>
                </section>
    </footer>
  )
}

export default Footer