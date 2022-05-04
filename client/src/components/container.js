import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import NewItem from './pages/New-Item';
import Profile from './pages/Profile';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'New-Item') {
            return <NewItem />;
        }
        if (currentPage === 'Profile') {
            return <Profile />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
