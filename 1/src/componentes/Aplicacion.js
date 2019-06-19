import React from 'react';
import Productos from './Productos'
import Footer from './footer'
import Header from './Header'

class Aplicacion extends React.Component{
    // constructor(props){
    //     super();
        state={
            productos :[
                // {nombre:'libro', precio:230},
                // {nombre:'casa',precio:300},
                // {nombre:'vieja', precio:345},
                // {nombre:'polistation', precio:200}
            ]  
        }
    // }
    componentDidMount(){
const productos= [
    {nombre:'libro', precio:230},
                    {nombre:'casa',precio:300},
                    {nombre:'vieja', precio:345},
                    {nombre:'polistation', precio:200}
]

        setTimeout(()=>{
            this.setState({
                productos :productos
               })
        },3000)
       
    }
    render(){
           return (<div>
          
            <Header  titulo="Mi Tienda virtual"/>
            <Productos productos={this.state.productos}/>
            <Footer/>
            </div>)
    }
}

export default Aplicacion;