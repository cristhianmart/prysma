import { useState } from 'react'
import Headeradmi from './components/Helpers/Headeradmi'
import { dataBase } from './components/Firebase/Config'
import { doc, setDoc } from "firebase/firestore";


const Admimg = () => {
    const [nombreProd, setNombreProd] = useState('');
    const [urlImg, setUrlImg] = useState('');
    const [descriProd, setDescriProd] = useState('');
    const [nombreImg, setNombreImg] = useState('');
    const [categoria, setCategoria] = useState('');

    const campos = [document.querySelector("#produccion"), document.querySelector("#url"), document.querySelector("#nombre"), document.querySelector("#descripcion")]
    const check = [document.querySelector("#radio1"), document.querySelector("#radio2")]
    async function agregarProduccion() {
        await setDoc(doc(dataBase, nombreProd, nombreImg), {
            url: urlImg,
            descripcion: descriProd,
            categoria: categoria
        })
        limpiarCampos();
    }

    function limpiarCampos() {
        campos.forEach(e => {
            e.value = "";
        });

        check.forEach(e => {
            e.checked=false;
        })
    }

    return (
        <section className="panel-container">
            <Headeradmi />
            <section className="panel">
                <section className="vista-previa">
                    <input required id='produccion' onChange={(e) => setNombreProd(e.target.value)} className="texto" type="text" placeholder="Ingresa el nombre de la producción" />
                    <input required id='url' onChange={(e) => setUrlImg(e.target.value)} type="text" placeholder='Ingresa la url de la imagen' className='texto' />
                    <input required id='nombre' onChange={(e) => setNombreImg(e.target.value)} type="text" placeholder='Nombre de la imagen' className='texto' />
                    <textarea required id='descripcion' onChange={(e) => setDescriProd(e.target.value)} className="texto" cols="30" rows="10" placeholder="Agregar descripción de la producción fotografica"></textarea>
                    <section className="panel-categoria">
                        <label><input id='radio1' onChange={(e) => setCategoria(e.target.value)} type="radio" name="categoria" value="gastronomia" />Gastronomia</label>
                        <label ><input id='radio2' onChange={(e) => setCategoria(e.target.value)} type="radio" name="categoria" value="arquitectura" />Arquitectura</label>
                    </section>

                </section>


                <button onClick={agregarProduccion} className="guardar">Guardar</button>
                <button onClick={limpiarCampos} className="guardar">Cancelar</button>
            </section>

        </section>
    )
}

export default Admimg