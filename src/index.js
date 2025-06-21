import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export const formatUrl = (platform, username) => {
    const baseUrls = {
        instagram: `https://www.instagram.com/${username}`,
        twitter: `https://twitter.com/${username}`,
        linkedin: `https://www.linkedin.com/in/${username}`
    };
    return baseUrls[platform] || '';
};

export const handleLinkClick = (url) => {
    window.open(url, '_blank');
};