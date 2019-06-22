import React, { Component } from 'react';
import Gasto from './gasto'

class Listado extends Component {

    render() {
        return (
            <div>
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Listado</span>

                </h4>
                <ul className="list-group mb-3">

                    {Object.keys(this.props.gastos).map(key => (
                        <Gasto
                            key={key}
                            gasto={this.props.gastos[key]}
                        />
                    ))}

                </ul>

            </div>
        )
    }
}
export default Listado;