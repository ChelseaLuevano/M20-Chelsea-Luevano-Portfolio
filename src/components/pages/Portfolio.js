import React from 'react';
import PutASporkInIt from './putasporkinit-co-2023-05-09.png';
import MoveMeScene from './MoveMe-Scene-Project.png';
import SocialMediaAPI from './M-18NoSQLSocialMediaAPIPreview.png'
import SQLEmployeeTracker from './SQL-Employee-Tracker.png'
import SVGLogoMaker from './M10-SVG-Logo-Maker.png'

export default function Portfolio() {

    return (
        <div id="Portfolio" className="m-20 p-5">
            <h2 className=" text-3xl" > Group Projects </h2>
            <br></br>
            <ul className="grid grid-cols-2 gap-20">
                <li>
                    <h3 className="text-2xl">PutASporkInIt</h3>
                <a className="project" href="https://www.putasporkinit.co/">
                        <img
                            src={PutASporkInIt}
                            alt = "PutASporkInIt Project"
                    />
                    </a> 
                </li>  
                <li>
                    <h3 className="text-2xl">MoveMeScene</h3>
                <a className="project" href="https://trengland.github.io/MoveMe-Scene/">
                        <img
                            src={MoveMeScene}
                            alt = "MoveMeScene Project"
                    />
                    </a> 
                </li> 
            </ul>

            <br></br>
            <br></br>


            <h2 className="text-3xl" > Solo Projects </h2>
            <br></br>
            <ul className="grid grid-cols-2 gap-20 ">
                <li>
                    <h3 className="text-2xl">NoSQL Social Media API</h3>
                <a className="project" href="https://github.com/ChelseaLuevano/M18-NoSQL-Social-Network-API">
                        <img
                            src={SocialMediaAPI}
                            alt = "NoSQL SocialMediaAPI Project"
                    />
                    </a> 
                </li>  
                <li>
                    <h3 className="text-2xl">SQL Employee Tracker in Command Line</h3>
                <a className="project" href="https://github.com/ChelseaLuevano/M12-Employee-Tracker">
                        <img
                            src={SQLEmployeeTracker}
                            alt = "SQL Employee Tracker in Terminal Project"
                    />
                    </a> 
                </li> 
                <li>
                    <h3 className="text-2xl">SVG Logo Maker in Command Line</h3>
                <a className="project" href="https://github.com/ChelseaLuevano/M10-SVG-Logo-Maker">
                        <img
                            src={SVGLogoMaker}
                            alt = "SVG Logo Maker in Command Line Project"
                    />
                    </a> 
                </li> 
            </ul>


        </div>
    );
}

