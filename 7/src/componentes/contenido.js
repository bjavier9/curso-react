import React, { Component } from 'react'
import Evento from './evento';


class Contenido extends Component {
    render() {
        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        { Object.keys(this.props.eventos).map(key=>(
                            <Evento 
                            key={key}
                            info={this.props.eventos[key]}
                            />
                        ))}                 
                    </div>
                </div>
        </div>
        )
    }
}

export default  Contenido
