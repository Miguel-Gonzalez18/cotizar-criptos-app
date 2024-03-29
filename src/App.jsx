import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import ImagenCripto from './img/imagen-criptos.png'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
  const Imagen = styled.img`
    max-width: 400px;
    display: block;
    width: 80%;
    margin: 100px auto 0 auto;
  `

const Heading = styled.h1`
  font-family: 'lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto auto;
    border-radius: 5px;
  }
`

function App() {

  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)
  useEffect(()=>{
    if(Object.keys(monedas).length > 0 ){
      const cotizarCriptomoneda = async () => {
        setCargando(true)
        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResultado(resultado.DISPLAY[criptomoneda][moneda])
        setCargando(false)
      }
      cotizarCriptomoneda()
    }
  },[monedas])

  useEffect(()=>{
    if(localStorage.getItem('result')){
      const resultObjeto = localStorage.getItem('result')
      setResultado(JSON.parse(resultObjeto))
    }
  },[localStorage.getItem('result')])

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt='Imagen cirptomonedas'/>
      <div>
        <Heading>¡Opere con criptomonedas al instante!</Heading>
        <Formulario setMonedas={setMonedas} />
        {cargando && <Spinner />}
        {resultado.PRICE && <Resultado resultado={resultado}/>}
      </div>
    </Contenedor>
  )
}

export default App
