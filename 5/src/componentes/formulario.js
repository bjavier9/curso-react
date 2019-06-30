import React, { Component } from 'react'

class Formulario extends Component {
ciudadRef = React.createRef();
paisRef = React.createRef();

BuscarClima=(e)=>{
    e.preventDefault();
    const respuesta = {
        ciudad: this.ciudadRef.current.value,
        pais: this.paisRef.current.value
    }
    this.props.datosConsulta(respuesta)
}

    render() {
        return (

            <form className="form-inline" onSubmit={this.BuscarClima}>

                <div className="form-group mb-2">
                    <label >Introdusca una ciudad: </label>
                    <input type="text" className="form-control " ref={this.ciudadRef} placeholder="First name" />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <select className="custom-select " ref={this.paisRef}>
                        <option value="" defaultValue>Elige un país</option>
                        <option value="PA">Panamá</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="ES">España</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>
                <div className="col-auto my-1">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>

            </form>

        )
    }
}
export default Formulario