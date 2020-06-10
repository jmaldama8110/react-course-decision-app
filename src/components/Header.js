import React from 'react';

const Header = (props) =>(
        <div className="header">
            <div className="container">
                <h1 className="header__titulo">{props.titulo}</h1>
                {props.subtitulo && <h2 className="header__subtitulo">{props.subtitulo}</h2> } 
        
            </div>
        </div>
    );

Header.defaultProps = {
    titulo: 'Decisiones!'
};

export default Header;