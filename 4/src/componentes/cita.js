import React, {Component} from 'react';
class Citas extends Component{

  eliminarCita=()=>{
    this.props.borrarCita(this.props.info.id)
    
  }
   render(){
    const {fecha,hora,mascota,propietario,sintomas}=this.props.info; 
    return (
        <div className="media mt-3" >
        <div className="media-body">
            <h6 className="mt-0">{mascota}</h6>
            <p className="card-text">Dueño:{propietario}</p>
            <p className="card-text">Fecha:{fecha}</p>
            <p className="card-text">Hora:{hora}</p>
            <p className="card-text">Sintomas:{sintomas}</p>
            <button className="btn btn-warning" onClick={this.eliminarCita}>Eliminar</button>
        </div>
      </div>
    )
   } 
}
export default Citas