import React, { useState } from 'react';
import githubLogo from '../github-mark.svg'

function Footer() {

    return (
        <footer className='flex flex-row place-content-center space-x-10'>
            <a className=' w-1/12' href="https://github.com/ChelseaLuevano"></a><img  src={githubLogo} alt ="GitHub Logo"/>
            <a className=' w-1/12' href="https://www.linkedin.com/in/chelsealuevano/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="LinkedIn logo"/></a>
        </footer>
    )
}

export default Footer;