/* eslint-disable no-unused-vars */
import React,{Component} from 'react';
import Header from './header';
import Formulario from './formulario';
import Error from './Error'
import Clima from './clima'



class App extends Component {
    state = {
        error:'',
        consulta:'',
        resultado:''
    }
componentDidMount(){
    this.setState({
        error:false
    })
}

componentDidUpdate(prevProps, prevState){
    if (prevState.consulta !== this.state.consulta)
    this.consultaApi();
}
consultaApi = ()=>{
    const{ciudad,pais}=this.state.consulta;
    if(!ciudad||!pais)return null
    const appId="a64d0bdf8df05067650b5e60af89999b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
    fetch(url).then(respuesta=>{
        return respuesta.json()
    }).then(datos=>{
        this.setState({
            resultado:datos
        })
    }).catch(error=>{
        console.log(error)
    })


}

   datosConsulta = respuesta =>{
       if(respuesta.ciudad ===""|| respuesta.pais==="")
       this.setState({
           error:true
       });      
       else{
          this.setState({
           consulta:respuesta,
           error:false
       }) 
       }
       
   }
    render() {
        const error = this.state.error;
        let resultado
        if(error){
            resultado = <Error msj="campos vacios"/>
        }else{
            resultado = <Clima resultado={this.state.resultado}/>
        }
        return (
            <div>
                <Header titulo="App del clima" />
                <main role="main" className="flex-shrink-0">
                    <div className="container">
                        <Formulario datosConsulta={this.datosConsulta}/>
                    </div>
                </main>
                {resultado}
            </div>
        )
    }
}

export default App;