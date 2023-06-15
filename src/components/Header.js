import React from 'react';
import Navigation from './Navigation';

function Header({currentPage, handlePageChange}) {

    const portfolioName = "Chelsea Luevano"
    return (
        <header className="m-10 text-5xl">
            <h1>{portfolioName}</h1>
            <Navigation handlePageChange={handlePageChange} />
        </header>
    )
}

export default Header;