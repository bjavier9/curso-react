import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import Header from "./header"
import Navegacion from "./navegacion"
import Posts from "./Posts"
import SinglePost from "./singlepost"
import Formulario from "./formulario"
import Editar from "./editar"

export default class Router extends Component {
    state = {
        posts: []
    }
    componentDidMount(){
        this.obtenerPost();
    }

    obtenerPost=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(r=>{
            // console.log(r)
            this.setState({
                posts:r.data
            })
        })
    }
    borrarPost=(id)=>{
        console.log(id)

        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((r)=>{
            console.log(r.status)
            if(r.status===200){
            const posts = [...this.state.posts]
            let resultado = posts.filter(post=>(

            
                post.id !== Number(id)
            ))
            this.setState({
                posts:resultado
            })
        }})
        .catch((c)=>{console.log(c)})


    }

    crearPost = (post)=>{
        axios.post(`https://jsonplaceholder.typicode.com/posts`,{post})
        .then(res=>{
            if(res.status===201){
                let postId = {id:res.data.id};
                const nuevoPost = Object.assign({},res.data.post, postId);
                this.setState(prevState =>({
                    posts:[...prevState.posts, nuevoPost]
                }))
                console.log(this.state.posts)
            }
        })
    }
    editarPost=(postActualizado)=>{
        const {id}=postActualizado
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{postActualizado})
        .then(res=>{
            if(res.status===200){
                
                let postId = res.data.id;
                const posts = [...this.state.post];
                const postEditar = posts.findIndex(post=>postId===post.id)
                posts[postEditar]=postActualizado;
                this.state({
                    posts
                })
            }
        })
       
    }
    render() {
      

        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <Header titulo="Productos" />
                        <Navegacion />
                        <Switch>
                            <Route exact path="/" render={
                                ()=>{
                                    return(<Posts 
                                        posts={this.state.posts}
                                        borrarPost={this.borrarPost}
                                        />) 
                                    
                                }
                            }/>
                            <Route exact path="/post/:postId" render={(props)=>{
                                let idPost = props.location.pathname.replace('/post/','');
                                const posts = this.state.posts;
                                let filtro;
                               
                             
                                   filtro = posts.filter(post=>(

                                    post.id === Number(idPost)
                                    
                                    ))
                            
                               
                         
                                return(
                                    <SinglePost
                                    post = {filtro[0]}
                                    />
                                
                                )
                            }}/>
                            <Route exact path="/crear" 
                            render={()=>{
                                return(
                                <Formulario 
                                crearPost={this.crearPost}
                                />
                                )}}                         
                            />
                               <Route exact path="/editar/:postId" render={(props)=>{
                                let idPost = props.location.pathname.replace('/editar/','');
                                const posts = this.state.posts;
                                let filtro;
                               
                             
                                   filtro = posts.filter(post=>(

                                    post.id === Number(idPost)
                                    
                                    ))
                            
                               
                         
                                return(
                                    <Editar
                                    post = {filtro[0]}
                                    editarPost={this.editarPost}
                                    />
                                
                                )
                            }}/>

                        </Switch>
                    </div>
                </div>


            </BrowserRouter>
        )
    }
}
