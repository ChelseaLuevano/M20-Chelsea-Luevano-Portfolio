import React, { useState } from 'react';
import Navigation from './Navigation';

function Header() {

    const portfolioName = "Chelsea Luevano"
    return (
        <div>
            <h1>{portfolioName}</h1>
            <Navigation />
        </div>
    )
}

export default Header;