import React from 'react'
import PropTypes from "prop-types";
const Noticia = (props)=>{
   
    const{urlToImage, url, title,description, source, publishedAt} = props.noticia;

    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    {title}
                </div>
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={urlToImage} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{source.name}</h5>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <a href={url} className="btn btn-sm btn-outline-secondary">View</a>
                        </div>

                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{publishedAt}</small>
                    </div>
                </div>
            </div>
        </div>
        )
    
}

Noticia.propTypes = {
    noticia:PropTypes.shape({
        urlToImage:PropTypes.string,
        url:PropTypes.string,
        title:PropTypes.string,
        description:PropTypes.string,
        source:PropTypes.object,
        publishedAt:PropTypes.string
    })
}
export default Noticia
