/* eslint-disable no-unused-vars */
import React from 'react';
import Formulario from './formulario';
import Listado from './listado';
import {validarPresupuesto} from './helper'
import Header from './header';
import ControlPresupuesto from './controlpresupuesto';
class App extends React.Component {
   state={
    presupuesto:'',
    restante:'',
    gastos:{}
   } 

componentDidMount(){
    this.obtenerPresupuesto()
}

obtenerPresupuesto = ()=>{
    let presupuesto = prompt('¿Cual es tu presupuesto?');
    let resultado =validarPresupuesto(presupuesto)
    if(resultado){
        this.setState({
            presupuesto:presupuesto,
            restante: presupuesto
        })
    }else{
        this.obtenerPresupuesto();
    }
}
agregarGasto=gasto=>{

    const gastos = {...this.state.gastos};

    gastos[`gasto${Date.now()}`]=gasto;
    this.RestarPresupuesto(gasto.cantidadGasto)
    this.setState({
        gastos
    })
}

RestarPresupuesto = cantidad=>{
let restar = Number(cantidad)
let restante = this.state.restante;
restante -=restar;

restante = String(restante);

// agregamos el nuevo state
this.setState({
  restante
})
console.log(restante)
}

    render() {
        return (<div>

            <Header titulo="Gasto semanal" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                          <Listado
                          gastos={this.state.gastos}
                          />  

                          <ControlPresupuesto 
                          presupuesto={this.state.presupuesto}
                          restante = {this.state.restante}                          />         
                    </div>
                    <div className="col-md-8 order-md-1">
                    <Formulario 
                    agregarGasto={this.agregarGasto}
                    />
                             
                    </div>
                </div>

            </div>

        </div>)
    }
}

export default App;