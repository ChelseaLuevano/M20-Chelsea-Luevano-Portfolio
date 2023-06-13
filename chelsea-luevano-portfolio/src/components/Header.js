import React, { useState } from 'react';
import Navigation from './Navigation';

function Header({currentPage, handlePageChange}) {

    const portfolioName = "Chelsea Luevano"
    return (
        <header className="m-10">
            <h1>{portfolioName}</h1>
            <Navigation handlePageChange={handlePageChange} />
        </header>
    )
}

export default Header;