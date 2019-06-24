/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './hearder';
import AgregarCitas from './agregarcitas'
import ListaCitas from './ListaCitas'

class App extends React.Component {
    state = {
        citas:[]
    }
  crearCita=(nuevaCita)=>{
      const citas = [...this.state.citas, nuevaCita];
        this.setState({
            citas
        })
  }
    render() {
        return (<div>

            <Header
            titulo="Reserva de citas"
            />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                       <ListaCitas
                       citas={this.state.citas}
                       />
                                               
                    </div>
                    <div className="col-md-8 order-md-1">
                        <AgregarCitas crearCita={this.crearCita} titulo='Formulario de citas'/>                     
                    </div>
                </div>

            </div>

        </div>)
    }
}

export default App;