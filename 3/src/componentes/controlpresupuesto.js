import React, {Component} from 'react';
import Presupuesto from './presupuesto'

import Restante from './restante'
class ControlPresupuesto extends Component{
    render(){
        return(
            <div>
                <Presupuesto
                presupuesto={this.props.presupuesto}
                />
                <Restante
                presupuesto={this.props.presupuesto}
                restante={this.props.restante}
                />
            </div>
        )
    }

}
export default ControlPresupuesto;