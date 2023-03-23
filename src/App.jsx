import { useState } from "react";



function App() {
  const [primerNumero, setPrimerNumero] = useState(0)
  const [segundoNumero, setSegundoNumero] = useState(0)
  const [edad, setEdad] = useState(false)

  
  const validadorDeEdad = (numero) => {
    if (numero >= 18) {
      setEdad(true)
    } else {
      setEdad(false)
    }
  }
  //---------------------------------------

  return (
    <div className="App">
      <h1>Suma de numeros</h1>
      <input type="number" onChange={evento => setPrimerNumero(parseInt(evento.target.value))}/>
      <samp>+</samp>
      <input type="number" onChange={evento => setSegundoNumero(parseInt(evento.target.value))}/>
      <spam>= {primerNumero + segundoNumero}</spam>
      <h1>Es mayor de edad?:</h1>
      <input type="number" onChange={evento => validadorDeEdad(parseInt(evento.target.value))}/>
      {edad === true ?
      <p>es mayor de edad</p> :
      <p>es menor de edad</p>}
      <p>-----------------------------------------------</p>


    </div>
  );
}

export default App;
