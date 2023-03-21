import React, { useState, useEffect } from 'react';

function TextoAutomatico() {
  const [texto, setTexto] = useState("");
  const velocidad = 100;

  useEffect(() => {
    const textoCompleto = "Biienvenido Esteban de los angeles a mi pagina xd";
    let i = 0;
    let intervalo = setInterval(() => {
      if (i < textoCompleto.length) {
        setTexto((texto) => texto + textoCompleto.charAt(i));
        i++;
      } else {
        clearInterval(intervalo);
      }
    }, velocidad);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>{texto}</div>
  );
}

export default TextoAutomatico;
