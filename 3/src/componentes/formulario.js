/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class Formulario extends Component {
    // ref formulario
    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();
crearGasto=(e)=>{
    e.preventDefault()
    const gasto = {
        nombreGasto: this.nombreGasto.current.value,
        cantidadGasto:this.cantidadGasto.current.value
    }
this.props.agregarGasto(gasto);

    e.currentTarget.reset();



}

    render() {
        return (

            <form onSubmit={this.crearGasto}>
                <h4>Agregar gastos aqui</h4>
                <div className="mb-3">
                    <label >Nombre del Gasto </label>
                    <input type="text" ref={this.nombreGasto} className="form-control" id="gasto" placeholder="Transporte" />

                </div>

                <div className="mb-3">
                    <label >Cantidad</label>
                    <input type="text" ref={this.cantidadGasto} className="form-control" id="cantidad" placeholder="1234 " required />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        )
    }
}
export default Formulario