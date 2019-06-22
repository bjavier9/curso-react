import React, {Component} from 'react'
import { revisarPresupuesto } from './helper';


class Restante extends Component{
    render(){
        const presupuesto = this.props.presupuesto;
        const restante = this.props.restante;
        return(
            <div>
               <div className={revisarPresupuesto(presupuesto,restante)} role="alert">
                    Restante: ${restante}
                </div>
            </div>
        )
    }

}
export default Restante;