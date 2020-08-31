import React from 'react'
import './index.css'






const Header = props =>{
    
    return(
        <div className='HeaderComponent'>
            <span>   {props.children} <button onClick={props.onclick}>+ Nova jornada</button></span>
     
        </div>
    )
}


export default Header