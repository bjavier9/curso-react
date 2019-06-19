import React,{Component} from 'react';
import Producto from './producto'
class Productos extends Component{
    render(){
        return(
            <div>
                <h6>Listados de productos: </h6>
                {Object.keys(this.props.productos).map(key=>(
                    
                    <Producto key={key} producto={this.props.productos[key]}/>
                    ))}
            </div>
        )
    }
}
export default Productos;