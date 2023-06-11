import React, { useState } from 'react';

function Navigation() {

    const aboutMe = "About Me"

    const portfolio = "Portfolio"

    const contactMe = "ContactMe"

    const resume = "Resume"

    return (
        <nav>
            <ul className='flex flex-row place-content-end space-x-10 mr-4'>
                <li>{aboutMe}</li>
                <li>{portfolio}</li>
                <li>{contactMe}</li>
                <li>{resume}</li>
            </ul>
        </nav>
    )
}

export default Navigation;