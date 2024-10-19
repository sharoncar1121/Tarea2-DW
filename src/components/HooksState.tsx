import React, { useState } from 'react'
import Persona from './Persona'

export default function HooksState() {

    const [nombre, setNombre] = useState<String>("Sharon") 
    
    function cambiarNombre(nombre: string){
        setNombre(nombre)
      }

  return (
    <div>
    <Persona nombre={nombre}></Persona>
     <button onClick={()=> cambiarNombre("Mia Gissel")}> click para cambiar nombre</button>
    </div>
  )
}
