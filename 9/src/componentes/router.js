import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./header/header"
import Productos from "./producto/productos";
import Nosotros from "./nosotros/nosotros";
import Error from "./error/error";
import SingleProducto from './producto/singleProducto';
import infoProductos from '../datos/datos.json';
import Navegacion from './navegacion/Navegacion';
import Contacto from './contacto/contacto'

export default class Router extends Component {

    state = {
        productos: [],
        terminoBusqueda:''
    }

    componentDidMount() {
        this.setState({
            productos: infoProductos
        })
    }

    busquedaProducto = (busqueda)=>{
        if(busqueda.length >3){
            this.setState({
                terminoBusqueda: busqueda
            })
        }else{
            this.setState({
                terminoBusqueda: ''
            })

        }
    }



    render() {
        let productos = [...this.state.productos];
        let busqueda = this.state.terminoBusqueda;
        let resultado 
        
      
        if(busqueda !== '') {
            resultado = productos.filter(producto => (
              producto.nombre.toLowerCase().indexOf( busqueda.toLowerCase()  ) !== -1
            ))
          } else {
            resultado = productos;
          }


        return (
            <BrowserRouter>
                <Header titulo="Productos" />
                <Navegacion/>
                <Switch>
                    <Route exact path="/" render={() => (
                    <Productos 
                    productos={resultado} 
                    busquedaProducto={this.busquedaProducto}
                    />)} 
                    />
                    <Route exact path="/nosotros" component={Nosotros} />
                    <Route exact path="/producto/:productoId" render={(props) => {                      
                      let idProducto = props.location.pathname.replace('/producto/', '');
                      const estado = [...this.state.productos]
                      
                                   return (
                                        <SingleProducto
                                             liluzi={estado[idProducto]}
                                             key={idProducto}
                                        />
                    )
                    }} />
                    <Route  exact path="/contacto" component={Contacto}  />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}
