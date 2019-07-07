import React from 'react'
import {Link} from 'react-router-dom'

const Productos = (props)=> {
    const{imagen, nombre, precio, id}=props.informacion;
  
        return (
            <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img className="bd-placeholder-img card-img-top" src={`img/${imagen}.png`} width="100%" height="225" alt={nombre} />
                            <div className="card-body">
                                <p className="card-text">{nombre} <span>$ {precio}</span></p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                       <Link to={`/producto/${id}`} className="btn btn-sm btn-primary">
                                       Mas informacion
                                       </Link>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        )
    
}
export default Productos;
