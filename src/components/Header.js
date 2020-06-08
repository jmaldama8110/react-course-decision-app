import React from 'react';

const Header = (props) =>{
    return (
        <div>
            <h1>Titulo: {props.titulo}</h1>
            {props.subtitulo && <h2>{props.subtitulo}</h2> } 
        </div>
    );
}

Header.defaultProps = {
    titulo: 'Decisiones!'
};

export default Header;