import React from 'react'
import styled from '@emotion/styled'

const Result = styled.div`
    font-family: 'lato', sans-serif;
    color: #fff;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 30px;
    @media (max-width: 768px){
        display: block;
    }
`
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 30px;
    span{
        font-weight: 700;
    }
`
const Imagen = styled.img`
    width: 150px;
    @media (max-width: 768px){
        display: block;
        margin: 0 auto;
    }
`
const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
    return (
        <Result>
            <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>El precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
                <Texto>El precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Result>
    )
}

export default Resultado