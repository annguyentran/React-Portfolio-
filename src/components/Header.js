import React from 'react';

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Hello` component is a child of our `App` component and is responsible for rendering the "Hello World" header.
function Header() {
  const name = 'Andrew Nguyen-Tran';
  const aboutMe = 'About Me'
  const portfolio = 'Portfolio'
  const contact = 'Contact'
  const resume = 'Resume'
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  return (
    <div className="container">
      <h2 className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a herf='#homepage'className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none fs-4">{name}</a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a herf='#aboutMe'className="nav-link fs-4 ">{aboutMe}</a>
        </li>
        <li className="nav-item">
          <a herf='#porfolio'className="nav-link fs-4 ">{portfolio}</a>
        </li>
        <li className="nav-item">
          <a herf='#contact'className="nav-link fs-4 ">{contact}</a>
        </li>
        <li className="nav-item">
          <a herf='#resume'className="nav-link fs-4 ">{resume}</a>
        </li>
      </ul>
      </h2>
    </div>
  );
}

export default Header;
