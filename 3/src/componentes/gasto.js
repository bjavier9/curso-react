import React, {Component} from 'react'

class Gasto extends Component{
   
    render(){ 
        const {cantidadGasto,nombreGasto}=this.props.gasto;
        return(
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">
                    {nombreGasto}
                </h6>
              </div>
              <span className="text-muted">{cantidadGasto}</span>
            </li>
        
        )
    }
}
export default Gasto 