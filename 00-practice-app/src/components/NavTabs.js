import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs bg-info">
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
         
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} //applying bootstrap class to show active link being displayed
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
         
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
