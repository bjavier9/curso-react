import React, { Component } from 'react'

class Resultado extends Component {
    render() {
const resultado = this.props.resultado;
const mensaje = (!resultado)?'Elije marca, año y tipo de seguro.':'El total es: $'
        return (
            <div className="alert alert-primary" role="alert">
               {mensaje}{resultado}
            </div>
        )
    }

}

export default Resultado;