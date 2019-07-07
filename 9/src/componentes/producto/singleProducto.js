import React, { Component } from 'react'

export default class singleProducto extends Component {

    render() {
      
        let visibilityStado = "hidden"
        let nombre1, precio1, imagen1, descripcion1
        // const {nombre}= this.props.liluzi
        // console.log(nombre)
        if(this.props.liluzi===undefined){
            visibilityStado = "hidden"
        }else{
            visibilityStado = "visible";
            let {nombre, precio, imagen, descripcion} =this.props.liluzi;
            nombre1 = nombre;
            precio1 = precio;
            imagen1 = imagen;
            descripcion1 = descripcion;

          console.log(this.props.liluzi)             

        }
        
            
        return (
            
            <div className="card mb-3" style={{visibility: visibilityStado}}>               
                   <img src={`/img/${imagen1}.png`} className="card-img-top" alt={nombre1}   />
                   <div className="card-body">
                       <h5 className="card-title">{nombre1}</h5>
                       <p className="card-text">{descripcion1}</p>
                       <p className="card-text"><small className="text-muted">${precio1}</small></p>
                   </div>
               
            </div>
        )
    }
}
