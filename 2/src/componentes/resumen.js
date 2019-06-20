import React, {Component} from 'react'
import {primeraMayuscula} from '../helper'
import Resultado from './resultado'
class Resumen extends Component{

    mostrarResumen=()=>{
        const {marca, year, plan} = this.props.datos 
        if(!marca||!year||!plan) return null;
        return(
            <div className="card">
                <div className="card-header">
                   {this.props.titulo}</div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">Marca: { primeraMayuscula(marca)}</li>
                            <li className="list-group-item">Año: {year}</li>
                            <li className="list-group-item">Plan: {primeraMayuscula(plan)}</li>
                        </ul>
                    </blockquote>
                </div>
            </div>
        )
    }

    render(){
  
       return (            
            <div>
                {this.mostrarResumen()}
                <Resultado
                resultado={this.props.resultado}
                />
            </div>
        )
    }

}
export default Resumen;