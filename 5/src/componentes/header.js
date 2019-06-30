import React from 'react';

const Header =(props)=>{
    return (
        <header className="top">
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1 mx-auto">{props.titulo}</span>
            </nav>
        </header>
    )
}
export default Header