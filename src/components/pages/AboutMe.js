import React from 'react';
import ProfilePic from './ProfilePic1.jpg'

export default function AboutMe() {

    return (
        <div id="AboutMe" className="m-20 p-5">
            <h2 className="text-4xl flex flex-col items-center">About Me</h2>
            <br></br>
            <div className="flex flex-row">
            <img className='w-1/6 rounded-md' src={ProfilePic} alt="ProfilePic"/>
            <p className=" text-2xl m-10">I am an Agile Leader currently in Financial Technology Industry. 
                I am enrolled in a coding bootcamp through Ohio State University 
                (January 2023 - July 2023).
            </p>
            </div>
        </div>
    );
}

