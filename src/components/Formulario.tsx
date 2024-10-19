import React, { useEffect, useState } from 'react'

export default function Formulario() {
    const [texto, setTexto] = useState("")
    const [contadorTexto, setContadorTexto] = useState(0)
    const [colorTexto, setColorTexto] = useState("red");

    useEffect(() => {
       const contadorTexto = texto.length
       setContadorTexto(contadorTexto)
       if (contadorTexto < 10) {
        setColorTexto("red");
    } else if (contadorTexto >= 10 && contadorTexto < 21) {
        setColorTexto("orange");
    } else {
        setColorTexto("green");
    }
    }, [texto])

    const manejadorCambioTexto = (e: any) => {
        setTexto(e.target.value)
    }
    
    //contar letras
  return (
    <div>
        <h1>COntador de letras</h1>
        <input name="" id=""
        value={texto}
        onChange={manejadorCambioTexto}
        style={{ color: colorTexto }}
        >
        </input>
        <p  style={{ color: colorTexto }}>La cantidad de letras: {contadorTexto} </p> 
    </div>
  )
}
