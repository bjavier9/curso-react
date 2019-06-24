import React, {Component} from 'react';
import Cita from './cita'
class ListaCitas extends Component{
   render(){
       const citas = this.props.citas;
       const mensaje = Object.keys(citas).length===0?'No hay citas':'Adinistrador de citas.'
       return (
        <div className="card mt-5" >
        <div className="card-body">
          {mensaje}

          {Object.keys(this.props.citas).map(cita=>(
              <Cita
              key={cita}
              info={this.props.citas[cita]}
              />
        ))}
          
        </div>
      </div>
    )
   } 
}
export default ListaCitas