import React, { useState } from 'react';

function Navigation() {

    const aboutMe = "About Me"

    const portfolio = "Portfolio"

    const contactMe = "ContactMe"

    const resume = "Resume"

    return (
        <div>
            {aboutMe}
            {portfolio}
            {contactMe}
            {resume}
        </div>
    )
}

export default Navigation;