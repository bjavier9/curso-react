/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './header'
import Formulario from './formulario'
import Contenido from './contenido'

class App extends React.Component {
    state={
        noticias:[]
    }
    componentDidMount(){
        this.consultarNoticia();
    }
 consultarNoticia=(categoria='general')=>{
     const appKey="fe8f0101fdd94383ab56ca92628bad0a";
     let url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${appKey}`
    fetch(url)
    .then(respuesta=>{return respuesta.json()})
    .then(noticias=>{
        console.log(noticias.articles)
       this.setState({
           noticias:noticias.articles
       }) 
    }).catch(e=>{console.log(e)})
    }
    render() {
        return (<main>
            <Header titulo="Noticias"/>
            <Formulario consultarNoticia={this.consultarNoticia}/>
            <Contenido noticias={this.state.noticias}/>
        </main>)
    }
}

export default App;