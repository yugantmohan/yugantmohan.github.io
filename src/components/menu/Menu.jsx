import "./menu.scss"

import React from 'react';

function menu({show, menuShow}) {
    return (
        <div className= {"menu "+ (show && "active")} >
            <ul>
                <li><a href ="#intro">Home</a></li>
                <li><a href="#works">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default menu;