import React, { Component } from 'react'

export default class SinglePost extends Component {
     mostrar = props=>{
        let post= props.post!==undefined ? props.post : null;
        if(post==null) return null;
         const {title,body,userId} = post
         return(
             <React.Fragment>
                 <h1>{title}</h1>
                 <p>Autor: {userId}</p>
                 {body}
             </React.Fragment>
         )
        }
        render() {
       
      
        return (
            <div className="col-12 col-md-8">
                {this.mostrar(this.props)}
            </div>
        )
    }
}
