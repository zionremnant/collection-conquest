import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#new-item"
                    onClick={() => handlePageChange('New Item')}
                    className={currentPage === 'New-Item' ? 'nav-link active' : 'nav-link'}
                >
                    New Item
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#profile"
                    onClick={() => handlePageChange('Profile')}
                    className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
                >
                    Profile
                </a>
            </li>

        </ul>
    );
}

export default NavTabs;
