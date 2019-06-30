/* eslint-disable no-template-curly-in-string */
import React, { Component } from 'react'

export default class Clima extends Component {
    mostrarResultado = ()=>{
            const{name, weather, main}=this.props.resultado;
            if(!name||!weather||!main)return null;
            const kelvin = 273.15;
            const nombrecl=`clima de ${name}`
            const urlIcono = `http://openweathermap.org/img/w/${weather[0].icon}.png`
            return(
                <ul>
                    <li>Resultado del clima: {name}
                    <img src={urlIcono} alt={nombrecl}/>
                    </li>
                    <li>Actual {(main.temp-kelvin).toFixed(2)}&deg;C</li>
                    <hr/>
                    <li>Max:{(main.temp_max-kelvin).toFixed(2)}&deg;C</li>
                    <li>Min:{(main.temp_min-kelvin).toFixed(2)}&deg;C</li>
                </ul>
            )
        }  
        render() {
      
        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <p className="lead text-muted">
                        {this.mostrarResultado()}
                    </p>
                </div>
            </section>
        )
    }
}
