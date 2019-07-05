import React, { Component } from 'react'


export class Formulario extends Component {
categoriaRef= React.createRef();
nombreEventRef = React.createRef()

 cambiarCategoria=(e)=>{
    e.preventDefault();
    this.props.consultarNoticia(this.categoriaRef.current.value)
    
}
buscarEvento = (e)=>{
    e.preventDefault();
    const datosBusqueda={
        nombre:this.nombreEventRef.current.value,
        categoria:this.categoriaRef.current.value
    }
    this.props.obtenerEventos(datosBusqueda);
}
mostrarOpciones = (key)=>{
 const categoria = this.props.categorias[key];
 const {id, name_localized}= categoria;
 if(!id || !name_localized) return null;
 return (
     <option key={id} value={id}>{name_localized}</option>
 )
}
    render() {
        const categorias =Object.keys(this.props.categorias) 
     
        return (

            <section className="jumbotron text-center">
                <div className="container">                   
                        <div className="container h-100">
                            <div className="row h-100 justify-content-center align-items-center">
                                <form className="col-12" onSubmit={this.buscarEvento}>
                                <div className="form-group mx-sm-3 mb-2">
                                    <input ref={this.nombreEventRef}  className="form-control" type="text"/>
                                </div>
                                    <div className="form-group mx-sm-3 mb-2">
                                        <select ref={this.categoriaRef} className="custom-select">
                                            {categorias.map(this.mostrarOpciones)}
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary mb-2">BUSCAR</button>
                                </form>
                            </div>
                        </div>
                    
                </div>
            </section>

        )
    }
        }

   
        
        export default Formulario
