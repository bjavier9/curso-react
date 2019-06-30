import React, { Component } from 'react'

export default class Error extends Component {
    render() {
        return (
            <div className="alert alert-danger" role="alert">
               {this.props.msj}
            </div>
        )
    }
}
