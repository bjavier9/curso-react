import React, { Component } from 'react';

class Formulario extends Component {



    marcaRef = React.createRef();
    yearRef = React.createRef();
    planBasicoRef = React.createRef();
    planCompletoRef = React.createRef();
    cotizarSeguro = (e) => {
        const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo';
        e.preventDefault();
        console.log(this.marcaRef.current.value);
        const infoauto = {
            marca: this.marcaRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        }
        console.log(infoauto)
        this.props.cotizarSeguro(infoauto)
        //reset formulario
        e.currentTarget.reset()
    }
    render() {
        return (
            <form className="cotizar-auto" onSubmit={this.cotizarSeguro}>
                <div className="form-group">
                    <label>Marca</label>
                    <select name="marca" className="form-control" ref={this.marcaRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Año</label>
                    <select name="year" className="form-control" ref={this.yearRef}>
                    <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" ref={this.planBasicoRef} name="plan" value="basico" /> Básico
                <input type="radio" ref={this.planCompletoRef} name="plan" value="completo" /> Completo
            </div>

                <button type="submit" className="btn btn-primary">Cotizar</button>
            </form>
        )
    }
}
export default Formulario