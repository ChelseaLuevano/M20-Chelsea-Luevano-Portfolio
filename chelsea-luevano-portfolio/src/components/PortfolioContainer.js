import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume'
import Header from './Header';
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
        if (currentPage === 'ContactMe') {
            return <ContactMe />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
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

