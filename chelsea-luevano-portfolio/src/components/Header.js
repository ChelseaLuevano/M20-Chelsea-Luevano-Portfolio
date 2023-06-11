import React, { useState } from 'react';
import Navigation from './Navigation';

function Header({currentPage, handlePageChange}) {

    const portfolioName = "Chelsea Luevano"
    return (
        <header>
            <h1>{portfolioName}</h1>
            <Navigation />
        </header>
    )
}

export default Header;