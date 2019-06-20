/* eslint-disable no-unused-vars */
import React from 'react';
import { calcularMarca, obtenerDiferenciaAnio, obtenerPlan } from '../helper';
import Formulario from './formulario';
import Resumen from './resumen';
import Header from './header';

class App extends React.Component {
    state = {
        resultado: '',
        datos: {}
    }
    cotizarSeguro = (datos) => {
        let resultado = "";
        const { marca, plan, year } = datos;
        resultado = 2000;
        const diferencia = obtenerDiferenciaAnio(year)
        resultado -= ((diferencia * 3) * resultado) / 100;
        resultado = calcularMarca(marca) * resultado;
        let incremetoPlan = obtenerPlan(plan);
        resultado = parseFloat(incremetoPlan * resultado).toFixed(2)
        const datosAuto={
            marca:marca,
            plan:plan,
            year:year
        }
        this.setState({
            resultado:resultado,
            datos:datosAuto
        })
    }

    render() {
        return (<div>

            <Header titulo="Cotizador de seguro de auto" />
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md text-center">
                        <Formulario cotizarSeguro={this.cotizarSeguro} />
                        <hr/>
                        <Resumen
                            titulo="Resumen"
                            datos={this.state.datos}
                            resultado={this.state.resultado}
                        />
                    </div>
                </div>

            </div>

        </div>)
    }
}

export default App;