import React from 'react';


function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav>
            <ul className='flex flex-row place-content-end space-x-10 mr-4'>
                <li>
                    <Link to = '/about' onClick={() => handleNavigation('/about')} className={activeNavItem === '/about' ? 'active' : ''}> About Me</Link>
                </li>
                <li>{portfolio}</li>
                <li>{contactMe}</li>
                <li>{resume}</li>
            </ul>
        </nav>
    )
}

export default Navigation;