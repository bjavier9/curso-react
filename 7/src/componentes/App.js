/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './header'
import Formulario from './formulario'
import Contenido from './contenido'


class App extends React.Component {
 token = "MDOQGT6QRRVXQMLTS47V";
 ordenar = 'date';
    state={
        categorias:[],
        eventos:[]
    }
    componentDidMount(){
        this.ObtenerCategoria();
    }
    ObtenerCategoria = async ()=>{
       
        const idioma = "es_ES";
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=${idioma}`;
        await fetch(url)
            .then(respuesta=>{
                return respuesta.json()
            })
            .then(categorias=>{
                this.setState({
                    categorias: categorias.categories
                })
            })

    }

    obtenerEventos = async (busqueda)=>{
     
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}`;
        await fetch(url)
            .then(respuesta=>{
                return respuesta.json()
            })
            .then(eventos=>{
                this.setState({
                    eventos: eventos.events
                })
            })
    }

    render() {
        return (<main>
            <Header titulo="Eventos"/>
            <Formulario 
            categorias={this.state.categorias}
            obtenerEventos={this.obtenerEventos}
            />
            <Contenido
            eventos={this.state.eventos}
            />
            
        </main>)
    }
}

export default App;