import React from 'react';

function Header({currentPage, handlePageChange}) {
  const name = 'Andrew Nguyen-Tran';
  const aboutMe = 'About Me'
  const portfolio = 'Portfolio'
  const contact = 'Contact'
  const resume = 'Resume'

  return (
    <div className="container">
      <h2 className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <p className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none fs-4">{name}</p>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href='#aboutMe' onClick={() => handlePageChange('aboutMe')}
              className="nav-link fs-4 ">{aboutMe}</a>
          </li>
          <li className="nav-item">
            <a href='#portfolio' onClick={() => handlePageChange('portfolio')}
              className="nav-link fs-4 ">{portfolio}</a>
          </li>
          <li className="nav-item">
            <a href='#contact' onClick={() => handlePageChange('contact')}
              className="nav-link fs-4 ">{contact}</a>
          </li>
          <li className="nav-item">
            <a href='#resume' onClick={() => handlePageChange('resume')}
              className="nav-link fs-4 ">{resume}</a>
          </li>
        </ul>
      </h2>

    </div>

  );
}

export default Header;
