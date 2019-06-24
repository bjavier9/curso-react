import React, {Component} from 'react';
import uuid from 'uuid'
class AgregarCitas extends Component {
    //ref
    nombreMascotaRef = React.createRef();
    propietarioRef=React.createRef();
    fechaRef= React.createRef();
    horaRef = React.createRef();
    sintomaRef = React.createRef();


   state = {
    error:false
   }
   
   CrearNuevaCita=(e)=>{
       e.preventDefault();
       const mascota =this.nombreMascotaRef.current.value,
       propietario= this.propietarioRef.current.value,
       fecha = this.fechaRef.current.value,
       hora= this.horaRef.current.value,
       sintomas = this.sintomaRef.current.value
       // eslint-disable-next-line eqeqeq
       if(mascota==""||propietario==""||fecha==""||hora==""||sintomas==""){
           console.log('no tienes nada')
           this.setState({
               error:true
           })
       }else{
           const nuevaCita={
           id:uuid(),
            mascota,
            propietario,
            fecha,
            hora,
            sintomas
       }
     
       this.setState({
        error:false
    })
       this.props.crearCita(nuevaCita)
       e.currentTarget.reset()
       }
       
       
   }
   
    render() {
        const existeError = this.state.error
        return (
            <div className="card">
  <div className="card-header">
    {this.props.titulo}
  </div>
  <div className="card-body">
      <form onSubmit={this.CrearNuevaCita}>
                 <div className="form-group">
                    <label>Nombre de la mascota</label>
                    <input ref={this.nombreMascotaRef} type="text" className="form-control" id="inputAddress" placeholder="Garlfield" />
                </div>
                <div className="form-group">
                    <label>Nombre del dueño</label>
                    <input ref={this.propietarioRef} type="text" className="form-control" id="inputAddress2" placeholder="Roxi,thor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label >Hora</label>
                        <input ref={this.horaRef} type="time" className="form-control" id="inputEmail4" placeholder="Hora" />
                    </div>
                    <div className="form-group col-md-6">
                        <label >Fecha</label>
                        <input ref={this.fechaRef} type="date" className="form-control" id="inputPassword4" placeholder="Fecha" />
                    </div>
                </div>

                <div className="form-group">
                    <label >Sintomas</label>
                    <textarea ref={this.sintomaRef} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
            <br/>
            {existeError?<div className="alert alert-warning" role="alert">
  Campos Vacios.
</div>:""}
  </div></div>
            
        )
    }
}
export default AgregarCitas