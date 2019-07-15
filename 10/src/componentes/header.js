import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
 
    render() {
        return (
            <header className="col-12 col-ms-8">
                <Link to={'/'}>
              <h1 className="text-center">{this.props.titulo}</h1>     
                </Link>

            </header>
                
           
        )
    }
}

export default Header
