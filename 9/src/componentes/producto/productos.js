import React, { Component } from 'react'
import Producto from './producto'
import Buscador from '../buscador/buscador'
export default class productos extends Component {
    render() {
        return (
            <div className="container">
                <h1>Nuestro productos</h1>
                <Buscador
                busqueda={this.props.busquedaProducto}
                />
                <div className="row">
                    {Object.keys(this.props.productos).map(producto=>(
                        <Producto informacion={this.props.productos[producto]}
                        key={producto}
                        />
                    ))}
                </div>
            </div>


        )
    }
}
