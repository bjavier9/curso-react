import React from 'react'

const Evento = (props) => {

    const { name } = props.info;
    if (!name) return null;
    let desc = props.info.description.text;
    if(desc.length>250){
        desc = desc.substr(0,250)
    }

    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
             {props.info.logo !== null ?
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={props.info.logo.url} alt={props.info.name.text} />
                    :''
             } 
                <div className="card-body">
                    <h5 className="card-title">{props.info.name.text} </h5>
                    <p className="card-text">{props.info.description.text}</p>
                    <div className="d-flex justify-content-between align-items-center">
                     

                    </div>
                   
                </div>
            </div>
        </div>
    )

}


export default Evento
