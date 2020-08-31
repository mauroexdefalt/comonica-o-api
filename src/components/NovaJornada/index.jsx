import React from 'react'
import './index.css'

const NovaJornada = props =>{
    
    return(
        <div className='jornada'>
            <span>Nova jornada <button onClick={props.onclick}>Voltar</button></span>
            <span>De um Nome para essa Jornada</span>
            <span><input type="text" placeholder='Digite Aqui'/></span>
            <li>Você pode alterar essas informações depois</li>
            <div><button>Continuar</button><button>Cancelar</button></div>

            
     
        </div>
    )
}


export default NovaJornada