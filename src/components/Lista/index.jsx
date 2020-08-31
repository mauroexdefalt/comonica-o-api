import React from 'react'
import './index.css'



const Lista = props => {   


    function getnome(lista) {
        return lista.map((resp) =><tr > {resp.name}</tr>)
    }
    function getdest(lista) {
        return lista.map((resp) =><tr> {resp.recipients}</tr>)
    }
    function getsucesso(lista) {
        return lista.map((resp) =><tr> {resp.success}</tr>)
    }
    function getstatus(lista) {
        return lista.map((resp) =><tr> {
        resp.status
             }</tr>)
    }


    return (
        <div className='lista'>
        
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Destinatario</th>
                        <th>Sucesso</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody >
                    <tr >
                        <th >{getnome(props.lista)}</th>
                        <th>{getdest(props.lista)}</th>
                        <th>{getsucesso(props.lista)}</th>
                        <th>{getstatus(props.lista)}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default Lista