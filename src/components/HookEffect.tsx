import React, { useEffect, useState } from 'react'

export default function HookEffect() {
    const [count, setCount] = useState(0)

    //se carga al renderizar el componente principal
    useEffect(() => {
        //contador de javaScript

        const intervalId = setInterval(()=> {
            setCount(prevCount=> prevCount + 1)
        }, 3000)
    
     return () => clearInterval(intervalId)
    }, )
    
  return (
    <div>El valor del contador es {count}</div>
  )
}
