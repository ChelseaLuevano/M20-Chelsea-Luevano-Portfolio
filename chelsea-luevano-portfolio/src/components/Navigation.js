import React from 'react';


function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav>
            <ul className=' nav flex flex-row place-content-end space-x-10 mr-4'>
                <li className="nav-item">
                    <a href="#AboutMe"
                        onClick={() => handlePageChange('AboutMe')}
                        className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </a>
                </li>
                <li className="nav-item">
                   <a 
                    href="#Portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage ==='Portfolio' ? 'nav-link active' : 'nav-link'}
                   >
                       Portfolio
                    </a> 
                </li>
                {/* <li className="nav-item">
                   Contact Me
                </li>
                <li className="nav-item">
                   Resume
                </li> */}
            </ul>
        </nav>
    )
}

export default Navigation;