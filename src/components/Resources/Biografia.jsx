import Header from '../Helpers/Header'
import Footer from '../Helpers/Footer'
import retrato from '../../assets/images/3.jpg'
const Biografia = () => {
    return (
        <section>
            <Header />
            <section className='bio-contenedor'>
                <section className='cont-descripcion'>
                    <p>HOLA, SOY <span> OSCAR CANO </span> ARQUITECTO Y FOTOGRÁFO...</p>
                    <p className='parrafo'>interesado en el desarrollo del conocimiento y experimentación de la Arquitectura, basado en competencias y habilidades en Diseño y Representación gráfica, que busca en la Fotografía, un complemento creativo, sensible y productivo, para el crecimiento personal y profesional.</p>
                </section>
                <img src={retrato} alt="Retrato" className='bio-retrato' />
                <section className='cont-titulos'>
                    <p>Arquitecto <br />
                       <span>Universidad Pontificia
                        Bolivariana</span> </p>
                    <p>Producción Fotográfica <br />
                        <span> CESDE </span> </p>
                </section>
            </section>

            <Footer />
        </section>
    )
}

export default Biografia