import React, { Component } from 'react'
import Noticia from './noticia'
import PropTypes from "prop-types"

class Contenido extends Component {
    render() {
        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {this.props.noticias.map(noticia=>(
                            <Noticia 
                            key={noticia.url}
                            noticia={noticia}/>
                        ))}                 
                    </div>
                </div>
        </div>
        )
    }
}
Contenido.propTypes = {
    noticias:PropTypes.array.isRequired
}
export default  Contenido
