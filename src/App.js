import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('aboutMe');

  const renderPage = () => {
    if (currentPage === 'aboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div>
    <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
    {renderPage()}
    <Footer/>
    </div>
  );
}

export default App;
