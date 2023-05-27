import { addDoc, collection } from 'firebase/firestore'
import { dataBase } from '../Firebase/Config'
import { useState } from 'react'
import Header from '../Helpers/Header'
import Footer from '../Helpers/Footer'

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [detalles, setDetalles] = useState('');
  const nuevoMensaje = collection(dataBase, 'Contacto')
  
  const campos = [document.querySelector("#nombre"), document.querySelector("#email"), document.querySelector("#asunto"), document.querySelector("#detalles") ]
  async function guardarMensaje() {
  const mensaje = {
    Nombre: nombre,
    Email: email, 
    Asunto: asunto, 
    Detalles: detalles
  }
  await addDoc(nuevoMensaje, mensaje);
  limpiarCampos()
}

function limpiarCampos () {
  campos.forEach(e => {
    e.value="";
  });
}

return (
  <section className='contacto-cont'>
    <Header />
    <section className='contacto-formcont' >

      <form action="" className='contacto-form'>

        <label htmlFor="nombre" className='contacto-label'>Nombre</label>
        <input type="text" placeholder='Nombre' id='nombre' className='contacto-input' onChange={(e) => setNombre(e.target.value)} />

        <label htmlFor='email' className='contacto-label' >Email</label>
        <input type="email" required placeholder='Email' id='email' className='contacto-input' onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="asunto" className='contacto-label' >Asunto</label>
        <input type="text" placeholder='Asunto' id='asunto' className='contacto-input' onChange={(e) => setAsunto(e.target.value)} />

        <label htmlFor="detalles" className='contacto-label' >Detalles</label>
        <textarea cols="30" rows="10" placeholder='Detalles' id='detalles' required className='contacto-ta' onChange={(e) => setDetalles(e.target.value)}></textarea>

        <input type="button" value="Enviar Mensaje" className='enviar' onClick={guardarMensaje}/>
      </form>
    </section>
    <Footer />
  </section>
)
}

export default Contacto