import React from 'react';
import Header from './header'
import Formulario from './formulario'
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper'

class App extends React.Component {
 cotizarSeguro=(datos)=>{
    const {marca, plan, year}=datos;
    let resultado =2000
    const diferencia = obtenerDiferenciaAnio(year)
    console.log(diferencia)
    resultado -=((diferencia*3)*resultado)/100
    resultado = calcularMarca(marca)*resultado
    let incremetoPlan = obtenerPlan(plan)
    resultado = parseFloat(incremetoPlan*resultado) 
    console.log(resultado)
}
    
    render() {
        return (<div>

            <Header titulo="Cotizador de seguro de auto" />
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-3 text-center">
                        <Formulario cotizarSeguro={this.cotizarSeguro} />
                    </div>
                </div>

            </div>

        </div>)
    }
}

export default App;