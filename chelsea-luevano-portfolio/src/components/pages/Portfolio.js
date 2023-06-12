import React, { useState } from 'react';
import PutASporkInIt from './putasporkinit-co-2023-05-09.png';
import MoveMeScene from './MoveMe-Scene-Project.png';

export default function Portfolio() {

    
    const deployedAppLink = "google.com"

    return (
        <div id="Portfolio">
            <ul>
                <li>
                    <h1>PutASporkInIt</h1>
                <a className="project " href="https://www.putasporkinit.co/">
                        <img
                            src={PutASporkInIt}
                            alt = "PutASporkInIt Project"
                    />
                    </a> 
                </li>  
                <li>
                    <h1>MoveMeScene</h1>
                <a className="project ">
                        <img
                            src={MoveMeScene}
                            alt = "MoveMeScene Project"
                    />
                    </a> 
                </li> 
            </ul>     
        </div>
    );
}

