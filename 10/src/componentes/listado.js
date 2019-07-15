import React, { Component } from 'react'
import Post from './post'
class Listado extends Component {
    mostrarPosts=()=>{
        const posts = this.props.posts;
        if(posts.length === 0)return null;
        return (
            <React.Fragment>
                {Object.keys(posts).map(post=>(
                    <Post 
                    borrarPost={this.props.borrarPost}
                    key={post}
                    info={this.props.posts[post]}
                    />
                ))}
            </React.Fragment>
        )
    }
    
    render() {
        return (
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
                <tbody>
                    {this.mostrarPosts()}
                </tbody>
            </table>
        )
    }
}
export default Listado;