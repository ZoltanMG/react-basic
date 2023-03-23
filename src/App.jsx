import { useState } from "react";



function App() {
  const [primerNumero, setPrimerNumero] = useState(0)
  const [segundoNumero, setSegundoNumero] = useState(0)
  const [edad, setEdad] = useState(false)
  const [paroimpar, setParoimpar]=useState(false)

  
  const validadorDeEdad = (numero) => {
    if (numero >= 18) {
      setEdad(true)
    } else {
      setEdad(false)
    }
  }
  //---------------------------------------
  const ParImpares = (numero) => {
  
    if (numero ) {
      setParoimpar(false)
    } else  {
      setParoimpar(true)
    }
  }
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

      <h1>Es Par o Impar?:</h1>
      <input type="number" onChange={evento => ParImpares(parseInt(evento.target.value))}/>

      {paroimpar === true ?
         <p>Es par</p> :
         <p>Es impar</p>}  

    </div>
  );
}
export default App;