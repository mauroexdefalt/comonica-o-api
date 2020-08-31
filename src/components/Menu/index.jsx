import React from 'react'
import './index.css'


const Menu = props =>{



    return(
        <div className='menu'>
           <span> <strong>Jornada</strong></span>
           <div className='itens'>
               
            {props.menu.map(resp => <span>{resp.name} {resp.quantity}</span>
                )}
           </div>
        </div>
    )
}

export default Menu