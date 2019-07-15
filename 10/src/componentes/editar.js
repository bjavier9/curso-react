import React, { Component } from 'react'

export default class Editar extends Component {
    tituloRef = React.createRef();
    entradaRef = React.createRef();
editarPost=(e)=>{
    e.preventDefault()

    const post = {
        title:this.tituloRef.current.value,
        body:this.entradaRef.current.value,
        userId:1,
        id: this.props.post.id
    }
console.log(post)
this.props.editarPost(post)
}
 CargarFormulario=()=>{ 
     if(!this.props.post)return null;   
      const {title, body}=this.props.post;
            return (
                <form onSubmit={this.editarPost} className="col-8">
                <legend className="text-center">Editar Post</legend>
                <div className="form-group">
                    <label>Titulo del Post</label>
                    <input type='text' ref={this.tituloRef} className="form-control" defaultValue={title} />
                </div>
                <div className="form-group">
                    <label>Contenido: </label>
                    <textarea ref={this.entradaRef} className="form-control" cols='14' rows='14' defaultValue={body}></textarea>
                </div>
                <button type='submit'className="btn btn-primary">Guardar cambios</button>

            </form>
            )
        }

    render() {
  
        return (
            <React.Fragment>
                {this.CargarFormulario()}
            </React.Fragment>
        )
    }
}
