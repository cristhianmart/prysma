import React from 'react'
import Header from '../Helpers/Header'
import Footer from '../Helpers/Footer'

const Contacto = () => {
  return (
    <section className='contacto-cont'>
        <Header/>
        <section className='contacto-formcont' >
          
            <form action="" className='contacto-form'>

              <label htmlFor="nombre" className='contacto-label'>Nombre</label>
              <input type="text" placeholder='Nombre' id='nombre' className='contacto-input'/>

              <label htmlFor='email' className='contacto-label'>Email</label>
              <input type="email" placeholder='Email'id='email' className='contacto-input'/>

              <label htmlFor="asunto" className='contacto-label'>Asunto</label>
              <input type="text" placeholder='Asunto' id='asunto' className='contacto-input'/>

              <label htmlFor="detalles" className='contacto-label'>Detalles</label>
              <textarea cols="30" rows="10" placeholder='Detalles' id='detalles' className='contacto-ta'></textarea>

              <input type="button" value="Enviar Mensaje" className='enviar' />
            </form>
        </section>
        <Footer/>
    </section>
  )
}

export default Contacto