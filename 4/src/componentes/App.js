/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './hearder';
import AgregarCitas from './agregarcitas'
import ListaCitas from './ListaCitas'

class App extends React.Component {
    state = {
        citas:[]
    }

    componentDidMount(){
        const citasLs = localStorage.getItem('citas')
        if(citasLs){
            this.setState({
                citas:JSON.parse(citasLs)
            })
        }
    }

componentDidUpdate(){
    localStorage.setItem(
        'citas',
        JSON.stringify(this.state.citas)
    )
}



  crearCita=(nuevaCita)=>{
      const citas = [...this.state.citas, nuevaCita];
        this.setState({
            citas
        })
  }

  borrarCita=id=>{
      console.log(id)

      const citasActuales = [...this.state.citas];
    //   console.log("antes");
    //   console.log(citasActuales)
      const citas = citasActuales.filter(cita=>cita.id!==id)
    //   console.log("despues")
    //   console.log(citas)
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
                       borrarCita={this.borrarCita}
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