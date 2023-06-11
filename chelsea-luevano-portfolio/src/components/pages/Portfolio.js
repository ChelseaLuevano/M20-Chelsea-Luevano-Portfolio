import React, { useState } from 'react';

export default function Portfolio() {

    const projectTitle = "projectTitle"
    const deployedAppLink = "google.com"

    return (
        <div>
            <li>
                <h1>{projectTitle}</h1>
                <img
                    alt = "placeholder"
                    className="project-image"
                    src={deployedAppLink}
                    // where/how do I add GitHub Link
                />
            </li>    
        </div>
    );
}

