import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe')

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header handlePageChange={handlePageChange} />
            {renderPage(currentPage)}
            {/* <Navigation currentPage={currentPage} handlePageChange={handlePageChange} /> */}
            <Footer />
        </div>
    )
}

