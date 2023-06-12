import React, { useState } from 'react';
import ProfilePic from './ProfilePic1.jpg'

export default function AboutMe() {

    return (
        <div id="AboutMe">
            <h2>About Me</h2>
            <img className='w-1/6' src={ProfilePic} alt="ProfilePic"/>
            <p>I am an Agile Leader currently in Financial Technology Industry. 
                I am enrolled in a coding bootcamp through Ohio State University 
                (January 2023 - July 2023).
            </p>
        </div>
    );
}

