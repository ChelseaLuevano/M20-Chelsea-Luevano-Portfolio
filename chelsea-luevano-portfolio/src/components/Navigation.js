import React, {useState } from 'react';


function Navigation({ currentPage, handlePageChange }) {
    
    const [activeLink, setActiveLink] = useState('about')

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    
    return (
        <nav className='text-Indigo-300 text-2xl'>
            <ul className=' nav flex flex-row place-content-end space-x-10 mr-4'>
                <li className="nav-item">
                    <a href="#AboutMe"
                        onClick={() => handlePageChange('AboutMe')}
                        className={currentPage === 'AboutMe' ? 'nav-link active:bg-violet-700' : 'nav-link'}
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
                <li className="nav-item">
                    <a 
                    href="#ContactMe"
                    onClick={() => handlePageChange('ContactMe')}
                    className={currentPage ==='ContactMe' ? 'nav-link active' : 'nav-link'}
                    style={{ marginRight: '1em' }} 
                    >
                   Contact Me
                   </a>
                </li>
                <li className="nav-item">
                    <a 
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage ==='Resume' ? 'nav-link active' : 'nav-link'}
                    >
                    Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;