import React, { useState } from 'react'

type Persona ={
    nombre: String,
}

export default function Persona(prop:Persona) { 
  
  return (
    <div>El nombre de la persona es:{prop.nombre}</div>
  )
}
