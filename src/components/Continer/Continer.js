import React from 'react';
import './Continer.css';


const Continer = (props) => {
    return (
        <div className="container main-container">
            {props.children}
        </div>
    )
}

export default Continer
