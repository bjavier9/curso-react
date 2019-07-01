import React, { Component } from 'react'
import PropTypes from "prop-types";

export class Formulario extends Component {
categoriaRef= React.createRef();

    cambiarCategoria=(e)=>{
    e.preventDefault();
    this.props.consultarNoticia(this.categoriaRef.current.value)
    
}
    render() {
        return (

            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Noticias por categoría</h1>
                   
                        <div className="container h-100">
                            <div className="row h-100 justify-content-center align-items-center">
                                <form className="col-12" onSubmit={this.cambiarCategoria}>
                                    <div className="form-group mx-sm-3 mb-2">
                                        <select ref={this.categoriaRef} className="custom-select">
                                            <option value="general" defaultValue>Elige una opción</option>
                                            <option value="business">Negocio</option>
                                            <option value="entertainment">Entretenimiento</option>
                                            <option value="health">Salud</option>
                                            <option value="science">Ciencia</option>
                                            <option value="sports">Deportes</option>
                                            <option value="technology">Tegnología</option>
                                            <option value="business">Negocios</option>
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

        Formulario.propTypes = {
            consultarNoticia:PropTypes.func.isRequired
        }
        
        export default Formulario
