import React from 'react'
import {NavLink} from 'react-router-dom'
const Navegacion=()=> {
    
        return(
            <div>
                 <ul className="nav nav-tabs justify-content-center">
                 <li className="nav-item">
                   <NavLink to={'/'} className="nav-link" activeClassName="active">productos</NavLink> 
                </li>
                <li className="nav-item">
                   <NavLink to={'/nosotros'} className="nav-link " activeClassName="active">nosotros</NavLink> 
                </li>
               
                <li className="nav-item">
                   <NavLink to={'/contacto'} className="nav-link" activeClassName="active">contacto</NavLink> 
                </li>
                
            </ul>
            </div>
        )
    
}
export default Navegacion