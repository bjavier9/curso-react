import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import swal from 'sweetalert2';
export default class Post extends Component {
    confirmarEliminar=()=>{
        const {id}=this.props.info;
        this.props.borrarPost(id)
        swal({
            title:'¿Estas seguro?',
            text:'Esta acción no se puede dehacer!',
            type:'warning',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'Sí, borrar!'
        }).then(result=>{
            if(result.value){
                this.props.borrarPost(id)
                swal(
                    'Eliminado!',
                    'Tu post a sido eliminado.',
                    'success'
                )
            }
        })
    }
    render() {
        const{id,title}=this.props.info
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-primary">Ver</Link>
                    <Link className="btn btn-warning" to={`/editar/${id}`}>Editar</Link>
                    <button onClick={()=>this.props.borrarPost(id)} type='button'className="btn btn-danger">Borrar</button>
                </td>
            </tr>
        )
    }
}
